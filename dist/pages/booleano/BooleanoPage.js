export default class BooleanoPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Booleano";
    }
    _generateHeader() {
        return "Booleano";
    }
    _generateFooter() {
        return "Booleano Footer";
    }
}
