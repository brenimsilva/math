export default class ConjuntoPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        const container = document.createElement("div");
        return container;
    }
    _generateHeader() {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        h1.innerText = "Conjuntos";
        div.appendChild(h1);
        return div;
    }
    _generateFooter() {
        return document.createElement("div");
    }
}
