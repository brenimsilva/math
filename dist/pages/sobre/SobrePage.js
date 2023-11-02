export default class SobrePage {
    render() {
        return { header: this._generateHeader(), body: this._generateBody(), footer: this._generateFooter() };
    }
    _generateBody() {
        return "Voce esta na pagina Sobre";
    }
    _generateHeader() {
        return "Sobre";
    }
    _generateFooter() {
        return "Footer da pagina Sobre";
    }
}
