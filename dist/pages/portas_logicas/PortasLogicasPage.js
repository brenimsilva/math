import PagesUtil from "../PagesUtil.js";
export default class PortasLogicasPage {
    static render(root) {
        PagesUtil.clear(root);
        const div = document.createElement("div");
        div.innerText = "test";
        root.appendChild(div);
    }
}
