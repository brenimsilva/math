export default class ConjuntoPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Conjunto";
    }
    _generateHeader() {
        return "Conjunto";
    }
    _generateFooter() {
        return "Conjunto Footer";
    }
}
