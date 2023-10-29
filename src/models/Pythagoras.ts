import Triangle from "./Triangle.js"

/**
 * Um triangulo retângulo é aquele que possui um ângulo interno reto. (90deg)
 * 
 * O lado que está oposto ao ângulo de 90deg é chamado de hipotenusa
 * Os demais lados são chamados de catetos (o ângulo formado pelos dois será de 90deg)
 * 
 * Imagem representativa em  ~/static/triangulo-retangulo.svg
 *
 */

export default class Pythagoras{
    constructor() {
    }

    public static calcHipotenusa(a: number, b: number) {
        const c = (a * a) + (b * b);
        return Math.sqrt(c);
    }

    public static calcCateto(hipotenusa: number, cateto: number) {
        const cateto2 = Math.sqrt((hipotenusa * hipotenusa) - (cateto * cateto));
        return cateto2; 
    }

}
