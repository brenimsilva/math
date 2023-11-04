import IPageRender from "../IPageRender.js";
import Pager, { PageStructure } from "../Pager.js"

export default class BooleanoPage implements IPageRender {
    public render(): PageStructure {
        return {header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter()} 
    }

    private _generateBody(): HTMLDivElement {
        const container = document.createElement("div");
        return container;
    }

    private _generateHeader(): HTMLDivElement {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerText = "Booleano";
        div.appendChild(h1);
        return div;
    }

    private _generateFooter(): HTMLDivElement {
        return document.createElement("div");
    }
}
