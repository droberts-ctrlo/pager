import $ from "jquery";
import { Button } from "./Button";
import { PagerEngine } from "./PagerEngine";
import { PageEvent } from "./Events";

export class Page {
    constructor(private element: JQuery<HTMLElement>, private engine: PagerEngine) {
        console.log(engine.maxPageNumber);
        if (element.data("page") === undefined) {
            throw new Error("Element is not a valid page");
        } else if (element.data("page") > 1) {
            const backButton = document.createElement("button");
            backButton.type = "button";
            backButton.classList.add("btn", "btn-secondary");
            backButton.textContent = "Back";
            element.find(".card-footer").append(backButton);
            new Button($(backButton), () => {
                const eventProps = {
                    to: this.number-1,
                    from:  this.number
                };
                const event: PageEvent = jQuery.Event("pager:back", eventProps);
                this.engine.element.trigger(event);
                this.engine.pageNumber--;
            });
        }
        if(element.data("page") === this.engine.maxPageNumber) {
            const finishButton = document.createElement("button");
            finishButton.type = "button";
            finishButton.classList.add("btn", "btn-success");
            finishButton.textContent = "Finish";
            element.find(".card-footer").append(finishButton);
            new Button($(finishButton), () => {
                alert("Finished!");
                const event: PageEvent = jQuery.Event("pager:finish");
                this.engine.element.trigger(event);
            });
        } else {
            const nextButton = document.createElement("button");
            nextButton.type = "button";
            nextButton.classList.add("btn", "btn-primary");
            nextButton.textContent = "Next";
            element.find(".card-footer").append(nextButton);
            new Button($(nextButton), () => {
                const eventProps = {
                    to: this.number+1,
                    from:  this.number
                };
                const event: PageEvent = jQuery.Event("pager:next", eventProps);
                this.engine.element.trigger(event);
                this.engine.pageNumber++;
            });
        }
    }

    show() {
        this.element.show();
    }

    hide() {
        this.element.hide();
    }

    get number() {
        return this.element.data("page");
    }
}
