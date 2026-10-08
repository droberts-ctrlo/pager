import "jquery";

// we have to use an interface as having a circular reference between
// PagerSetup and Page will make it cry
export interface PagerEngine {
    pageNumber: number;
    maxPageNumber: number;
    element: JQuery<HTMLElement>
}
