import IPageRender from "../IPageRender.js";
import Pager, { PageStructure } from "../Pager.js"

export default class SobrePage implements IPageRender {
    public render(): PageStructure {
        return {header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter()} 
    }

    private _generateBody(): string {
        return "Voce esta na pagina Sobre"
    }

    private _generateHeader(): string {
        return "Sobre"
    }

    private _generateFooter(): string {
        return "Footer da pagina Sobre"
    }
}

