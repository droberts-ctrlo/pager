import "jquery";

export interface PageEvent extends JQuery.Event {
    from?: number,
    to?: number
}

type pageEventName = "pager:next"|"pager:back"|"pager:finish";

declare global {
    interface JQuery {
        on(event: pageEventName, handler: (event: PageEvent) => void): this;
    }
}
