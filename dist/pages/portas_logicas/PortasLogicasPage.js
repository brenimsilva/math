export default class PortasLogicasPage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Portas Lógicas";
    }
    _generateHeader() {
        return "Portas Lógicas";
    }
    _generateFooter() {
        return "";
    }
}
