import PortaLogica from "./models/PortaLogica.js";
import PortasLogicasPage from "./pages/portas_logicas/PortasLogicasPage.js";
const menuDivs = document.querySelectorAll(".menu-option");
const appBody = document.querySelector(".app-body");
const menu = [];
menuDivs.forEach((div, index) => {
    menu.push({
        element: div,
        name: div.innerText,
        route: undefined,
        selected: false
    });
});
menu.forEach((el) => {
    if (el.innerText === "Portas Lógicas") {
        el.addEventListener('click', () => {
            PortasLogicasPage.render(appBody);
        });
    }
});
function selectMenu(itemSelected) {
    menu.forEach((item) => {
        item.element.classList.remove("option-selected");
    });
    itemSelected.element.classList.add("option-selected");
}
menu.forEach((item, index) => {
    item.element.addEventListener('click', () => {
        item.selected = true;
        selectMenu(item);
    });
});
console.log("index");
const result = PortaLogica.XNOR(true, true);
console.log(result);
