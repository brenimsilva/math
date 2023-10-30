export default class PortaLogica {
    constructor() { }
    static Buffer(a) {
        return a;
    }
    static AND(a, b) {
        return a === true && b === true;
    }
    static OR(a, b) {
        return a === true || b === true;
    }
    static XOR(a, b) {
        return (a === true && b === false) || (a === false && b === true);
    }
    static NAND(a, b) {
        return this.NOT(this.AND(a, b));
    }
    static NOR(a, b) {
        return this.NOT(this.OR(a, b));
    }
    static NOT(a) {
        return !a;
    }
    static XNOR(a, b) {
        return a === b;
    }
}
