export default class GeometriaPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Geometria";
    }
    _generateHeader() {
        return "Geometria";
    }
    _generateFooter() {
        return "";
    }
}
