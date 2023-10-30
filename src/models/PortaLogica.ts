export default class PortaLogica {
    constructor() {}

    public static Buffer(a: boolean) {
        return a;
    }

    public static AND(a: boolean,b: boolean) {
        return a === true && b === true;
    }

    public static OR(a: boolean, b: boolean) {
        return a === true || b === true;
    }

    public static XOR(a: boolean, b: boolean) {
        return (a === true && b === false) || (a === false && b === true)
    }

    public static NAND(a: boolean, b: boolean) {
        return this.NOT(this.AND(a,b));
    }

    public static NOR(a: boolean, b: boolean) {
        return this.NOT(this.OR(a,b));
    }

    public static NOT(a: boolean) {
        return !a;
    }

    public static XNOR(a: boolean, b: boolean) {
        return a === b
    }
}
