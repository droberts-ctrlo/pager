import $ from "jquery";
import { Page } from "./Page";
import { PagerEngine } from "./PagerEngine";

export class PagerSetup implements PagerEngine {
    pages: Page[] = [];

    private _pageNumber: number = 1;
    maxPageNumber: number;

    get pageNumber() {
        return this._pageNumber;
    }

    set pageNumber(value: number) {
        if(value < 1) return;
        if(value > this.maxPageNumber) return;
        this._pageNumber = value;
        this.refresh();
    }

    constructor(public element: JQuery<HTMLElement>) {
        const p = element.find("[data-page]");
        this.maxPageNumber = p.length;
        this.pages = p.map((_, el) => new Page($(el), this)).get();
        this.refresh();
    }

    private refresh() {
        for (const page of this.pages) {
            page.hide();
            if (page.number == this.pageNumber) {
                page.show();
            }
        }
    }
}
