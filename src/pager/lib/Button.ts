import "jquery";

// Probably don't need to isolate this in this way, but it may "grow"
export class Button {
    constructor(element: JQuery<HTMLButtonElement>, action: ()=>void) {
        element.on("click", action);
    }
}
