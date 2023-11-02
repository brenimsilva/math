import PagesUtil from "./PagesUtil.js";

export type PageStructure = {header: string, body: string, footer: string};
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

    static set header(html: string) {
        PagesUtil.clear(this.header);
        this._header.innerHTML = `<h1>${html}</h1>`;
    }

    static set body(html: string) {
        PagesUtil.clear(this.body);
        this._body.innerHTML = html;
    }

    static set footer(html: string) {
        PagesUtil.clear(this.footer);
        this._footer.innerHTML = html;
    }

    constructor() {}
}
