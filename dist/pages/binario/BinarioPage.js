export default class BinarioPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Binario";
    }
    _generateHeader() {
        return "Binario";
    }
    _generateFooter() {
        return "Binario Footer";
    }
}
