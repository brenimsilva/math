export default class PortaLogica {
    constructor() {}

    public static BUFFER(value: 0 | 1) {
        return value;
    }

    public static NOT(value: 0 | 1) {
        if(value === 0) return 1;
        else return 0;
    }

    public static AND(value1: 0 | 1, value2: 0 | 1) {
        if(value1 === 1 && value2 === 1) return 1
        else return 0;
    }

    public static OR(value1: 0 | 1, value2: 0 | 1) {
        if(value1 === 1 || value2 === 1) return 1;
        else return 0;
    }

    public static XOR(value1: 0 | 1, value2: 0 | 1) {
        return(
            this.OR
            (
                this.AND(value1, this.NOT(value2)),
                this.AND(value2, this.NOT(value2))
            )
        )
    }

    public static NAND(value1: 0 | 1, value2: 0 | 1) {
        return this.NOT(this.AND(value1,value2));
    }

    public static NOR(value1: 0 | 1, value2: 0 | 1) {
        return this.NOT(this.OR(value1,value2));
    }

    public static XNOR(value1: 0 | 1, value2: 0 | 1) {
        return this.OR(
            this.NOT(this.OR(value1,value2)),
            this.AND(value1,value2))
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
