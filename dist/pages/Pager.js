import PagesUtil from "./PagesUtil.js";
export default class Pager {
    static _header = document.getElementById("app-header");
    static _body = document.getElementById("app-body");
    static _footer = document.getElementById("app-footer");
    static get header() {
        return this._header;
    }
    static get body() {
        return this._body;
    }
    static get footer() {
        return this._footer;
    }
    static set header(html) {
        PagesUtil.clear(this.header);
        this._header.innerHTML = `<h1>${html}</h1>`;
    }
    static set body(html) {
        PagesUtil.clear(this.body);
        this._body.innerHTML = html;
    }
    static set footer(html) {
        PagesUtil.clear(this.footer);
        this._footer.innerHTML = html;
    }
    constructor() { }
}
