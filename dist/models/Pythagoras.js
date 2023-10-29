/**
 * Um triangulo retângulo é aquele que possui um ângulo interno reto. (90deg)
 *
 * O lado que está oposto ao ângulo de 90deg é chamado de hipotenusa
 * Os demais lados são chamados de catetos (o ângulo formado pelos dois será de 90deg)
 *
 * Imagem representativa em  ~/static/triangulo-retangulo.svg
 *
 */
export default class Pythagoras {
    constructor() {
    }
    static calcHipotenusa(a, b) {
        const c = (a * a) + (b * b);
        return Math.sqrt(c);
    }
    static calcCateto(hipotenusa, cateto) {
        const cateto2 = Math.sqrt((hipotenusa * hipotenusa) - (cateto * cateto));
        return cateto2;
    }
}
