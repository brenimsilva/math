import Pager from "./Pager.js";
import AlgebraPage from "./algebra/AlgebraPage.js";
import PortasLogicasPage from "./portas_logicas/PortasLogicasPage.js";
export default class Menu {
    static menuOptions = [
        { element: document.getElementById("menu-portas-logicas"), route: "portas-logicas", name: "Portas Lógicas", selected: false, generatePage: new PortasLogicasPage() },
        { element: document.getElementById("menu-conjuntos"), route: "conjuntos", name: "Conjuntos", selected: false, generatePage: () => { } },
        { element: document.getElementById("menu-booleano"), route: "booleano", name: "Booleano", selected: false, generatePage: () => { } },
        { element: document.getElementById("menu-binario"), route: "binario", name: "Binário", selected: false, generatePage: () => { } },
        { element: document.getElementById("menu-geometria"), route: "geometria", name: "Geometria", selected: false, generatePage: () => { } },
        { element: document.getElementById("menu-algebra"), route: "algebra", name: "Álgebra", selected: false, generatePage: new AlgebraPage() },
        { element: document.getElementById("menu-sobre"), route: "sobre", name: "Sobre", selected: false, generatePage: () => { } },
    ];
    static _selectedMenu;
    static get selectedMenu() {
        return this._selectedMenu;
    }
    static set selectedMenu(element) {
        if (element === this._selectedMenu)
            return;
        if (this._selectedMenu !== undefined) {
            this._selectedMenu.element.classList.remove("option-selected");
            this._selectedMenu.selected = false;
        }
        ;
        this._selectedMenu = element;
        this._selectedMenu.element.classList.add("option-selected");
        this._selectedMenu.selected = true;
        const { header, body, footer } = this._selectedMenu.generatePage.render();
        Pager.header = header;
        Pager.body = body;
        Pager.footer = footer;
    }
    constructor() { }
    static create() {
        this.menuOptions.forEach((item) => {
            item.element.addEventListener('click', () => {
                item.selected = true;
                this.selectedMenu = item;
            });
        });
        this.selectedMenu = this.menuOptions[0];
    }
}
