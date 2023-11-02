import IPageRender from "../IPageRender.js";
import Pager, { PageStructure } from "../Pager.js"

export default class ConjuntoPage implements IPageRender {
    public render(): PageStructure {
        return {header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter()} 
    }

    private _generateBody(): string {
        return "Voce esta na pagina Conjunto"
    }

    private _generateHeader(): string {
        return "Conjunto"
    }

    private _generateFooter(): string {
        return "Conjunto Footer"
    }
}
