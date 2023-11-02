export default class AlgebraPage {
    render() {
        return { header: this.generateHeader(), body: this.generateBody(), footer: this.generateFooter() };
    }
    generateBody() {
        return "Voce esta na pagina Portas Lógicas";
    }
    generateHeader() {
        return "Portas Lógicas";
    }
    generateFooter() {
        return "";
    }
}
