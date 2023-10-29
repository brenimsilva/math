export default class Matematica {
    constructor() { }
    static fator(n) {
        if (n % 2 === 0) {
            return 2;
        }
        if (n % 3 === 0) {
            return 3;
        }
        if (n % 5 === 0) {
            return 5;
        }
        return 7;
    }
    static squareRoot(n) {
        let fatorado = n;
        const fatores = [];
        while (fatorado !== 1) {
            const fator = this.fator(fatorado);
            fatores.push(fator);
            fatorado = fatorado / fator;
        }
        const sqrt = 0;
        // const reduce = fatores.reduce((acc, curr) => {
        // }, [])
        return sqrt;
    }
}
