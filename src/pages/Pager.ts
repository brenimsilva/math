import PagesUtil from "./PagesUtil.js";

export type PageStructure = {header: HTMLDivElement, body: HTMLDivElement, footer: HTMLDivElement};
export default class Pager {
    private static _header: HTMLDivElement = document.getElementById("app-header") as HTMLDivElement;
    private static _body: HTMLDivElement = document.getElementById("app-body") as HTMLDivElement;
    private static _footer: HTMLDivElement = document.getElementById("app-footer") as HTMLDivElement;

    static get header(): HTMLDivElement {
        return this._header
    }

    static get body(): HTMLDivElement {
        return this._body
    }

    static get footer(): HTMLDivElement {
        return this._footer
    }

    static set header(html: HTMLDivElement) {
        PagesUtil.clear(this.header);
        this._header.appendChild(html);
    }

    static set body(html: HTMLDivElement) {
        PagesUtil.clear(this.body);
        this._body.appendChild(html)
    }

    static set footer(html: HTMLDivElement) {
        PagesUtil.clear(this.footer);
        this._footer.appendChild(html)
    }

    constructor() {}
}
