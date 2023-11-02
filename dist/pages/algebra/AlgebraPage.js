export default class AlgebraPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Algebra";
    }
    _generateHeader() {
        return "Algebra";
    }
    _generateFooter() {
        return "";
    }
}
