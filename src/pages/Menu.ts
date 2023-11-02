import IPageRender from "./IPageRender.js";
import Pager from "./Pager.js";
import AlgebraPage from "./algebra/AlgebraPage.js";
import BinarioPage from "./binario/BinarioPage.js";
import BooleanoPage from "./booleano/BooleanoPage.js";
import ConjuntoPage from "./conjunto/ConjuntoPage.js";
import GeometriaPage from "./geometria/GeometriaPage.js";
import PortasLogicasPage from "./portas_logicas/PortasLogicasPage.js";
import SobrePage from "./sobre/SobrePage.js";


export type menuItem = {
    element: HTMLDivElement;
    route: string; 
    name: string;
    selected: boolean;
    generatePage: IPageRender;
}

export default class Menu {
    public static menuOptions: menuItem[] = [
        {element: document.getElementById("menu-portas-logicas") as HTMLDivElement, route: "portas-logicas", name: "Portas Lógicas", selected: false, generatePage: new PortasLogicasPage()},
        {element: document.getElementById("menu-conjuntos") as HTMLDivElement, route: "conjuntos", name: "Conjuntos", selected: false, generatePage: new ConjuntoPage()},
        {element: document.getElementById("menu-booleano") as HTMLDivElement, route: "booleano", name: "Booleano", selected: false, generatePage: new BooleanoPage()},
        {element: document.getElementById("menu-binario") as HTMLDivElement, route: "binario", name: "Binário", selected: false, generatePage: new BinarioPage()},
        {element: document.getElementById("menu-geometria") as HTMLDivElement, route: "geometria", name: "Geometria", selected: false, generatePage: new GeometriaPage()},
        {element: document.getElementById("menu-algebra") as HTMLDivElement, route: "algebra", name: "Álgebra", selected: false, generatePage: new AlgebraPage()},
        {element: document.getElementById("menu-sobre") as HTMLDivElement, route: "sobre", name: "Sobre", selected: false, generatePage: new SobrePage()},
    ]
    private static _selectedMenu: menuItem; 

    static get selectedMenu(): menuItem {
        return this._selectedMenu;
    }

    static set selectedMenu(element: menuItem) {
        if(element === this._selectedMenu) return;
        if(this._selectedMenu !== undefined){
            this._selectedMenu.element.classList.remove("option-selected")
            this._selectedMenu.selected = false;
        };

        this._selectedMenu = element;
        this._selectedMenu.element.classList.add("option-selected");
        this._selectedMenu.selected = true;

        const {header, body, footer} = this._selectedMenu.generatePage.render();
        Pager.header = header;
        Pager.body = body;
        Pager.footer = footer;
    }

    constructor() {}

    public static create() {
        this.menuOptions.forEach((item) => {
            item.element.addEventListener('click', () => {
                item.selected = true;
                this.selectedMenu = item;
            })
        });
        this.selectedMenu = this.menuOptions[0];
    }
}
