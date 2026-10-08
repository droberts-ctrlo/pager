// @ts-expect-error "No typings available for SCSS"
import "./index.scss";

import $ from "jquery";
import { PagerSetup } from "./pager";

$(()=>{
    new PagerSetup($(".paged"));
});
