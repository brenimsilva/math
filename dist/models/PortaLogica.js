export default class PortaLogica {
    constructor() { }
    static BUFFER(value) {
        return value;
    }
    static NOT(value) {
        if (value === 0)
            return 1;
        else
            return 0;
    }
    static AND(value1, value2) {
        if (value1 === 1 && value2 === 1)
            return 1;
        else
            return 0;
    }
    static OR(value1, value2) {
        if (value1 === 1 || value2 === 1)
            return 1;
        else
            return 0;
    }
    static XOR(value1, value2) {
        return (this.OR(this.AND(value1, this.NOT(value2)), this.AND(value2, this.NOT(value2))));
    }
    static NAND(value1, value2) {
        return this.NOT(this.AND(value1, value2));
    }
    static NOR(value1, value2) {
        return this.NOT(this.OR(value1, value2));
    }
    static XNOR(value1, value2) {
        return this.OR(this.NOT(this.OR(value1, value2)), this.AND(value1, value2));
    }
}
// public static Buffer(a: boolean) {
//     return a;
// }
// public static AND(a: boolean,b: boolean) {
//     return a === true && b === true;
// }
// public static OR(a: boolean, b: boolean) {
//     return a === true || b === true;
// }
// public static XOR(a: boolean, b: boolean) {
//     return (a === true && b === false) || (a === false && b === true)
// }
// public static NAND(a: boolean, b: boolean) {
//     return this.NOT(this.AND(a,b));
// }
// public static NOR(a: boolean, b: boolean) {
//     return this.NOT(this.OR(a,b));
// }
// public static NOT(a: boolean) {
//     return !a;
// }
// public static XNOR(a: boolean, b: boolean) {
//     return a === b
// }
////////////////////////////////////////////////////////////
