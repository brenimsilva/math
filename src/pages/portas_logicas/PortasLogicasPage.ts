import PagesUtil from "../PagesUtil.js"

export default class PortasLogicasPage {
    public static render(root: HTMLDivElement) {
        PagesUtil.clear(root);
        const div = document.createElement("div");
        div.innerText = "test";
        root.appendChild(div);

    }
}