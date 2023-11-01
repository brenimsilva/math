import PortaLogica from "./models/PortaLogica.js";
import PortasLogicasPage from "./pages/portas_logicas/PortasLogicasPage.js";
const menuDivs = document.querySelectorAll(".menu-option");
const appBody = document.querySelector(".app-body");
const menu = [];
menuDivs.forEach((div) => {
    menu.push({
        element: div,
        name: div.innerText,
        route: "",
        selected: false
    });
});
menu.forEach((el) => {
    if (el.element.innerText === "Portas Lógicas") {
        el.element.addEventListener('click', () => {
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
const result = PortaLogica.NAND(0, 1);
console.log(result);
