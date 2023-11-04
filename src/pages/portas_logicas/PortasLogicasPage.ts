import IPageRender from "../IPageRender.js";
import Pager, { PageStructure } from "../Pager.js"
import PagesUtil from "../PagesUtil.js";

type PagePaginator = {
    header: HTMLDivElement;
    body: HTMLDivElement;
    footer: HTMLDivElement;
}

export default class PortasLogicasPage implements IPageRender {
    andGateSvg: string = "https://upload.wikimedia.org/wikipedia/commons/b/b4/AND_DIN.svg"
    private bodyContainer: HTMLDivElement;
    private headerContainer: HTMLDivElement;
    private footerContainer: HTMLDivElement;
    private _page: number;
    private pageList: PagePaginator[] = [
        {
            header: this.pageOne().header,
            body: this.pageOne().body,
            footer: this.pageOne().footer
        },
        {
            header: this.pageTwo().header,
            body: this.pageTwo().body,
            footer: this.pageTwo().footer
        }
    ]

    get page(): number {
        return this._page;
    }

    set page(p: number) {
        this._page = p;
    }

    constructor() {
        this.headerContainer = document.createElement("div");
        this.bodyContainer = document.createElement("div");
        this.footerContainer = document.createElement("div");
        this._page = 0;
        this.renderPage(this._page)
    }

    public render(): PageStructure {
        return {header: this.headerContainer, body: this.bodyContainer, footer: this.footerContainer} 
    }

    private renderPage(page: number): void {
        PagesUtil.clear(this.headerContainer);
        PagesUtil.clear(this.bodyContainer);
        PagesUtil.clear(this.footerContainer);
        this.headerContainer.appendChild(this.pageList[page].header);
        this.bodyContainer.appendChild(this.pageList[page].body);
        this.footerContainer.appendChild(this.pageList[page].footer);
    }

    private pageOne(): PagePaginator {
        //header
        const headerContainer = document.createElement("div") as HTMLDivElement;
        const h1 = document.createElement("h1");
        h1.innerText = "Portas Lógicas - Intro";
        headerContainer.appendChild(h1);

        //body
        const bodyContainer = document.createElement("div") as HTMLDivElement;
        const link = document.createElement("link");
        link.rel = "stylesheet"
        link.href = "./src/pages/portas_logicas/portas_logicas.css";
        bodyContainer.appendChild(link);

        //footer
        const footerContainer = document.createElement("div") as HTMLDivElement;
        const btn = document.createElement("button");
        btn.innerText = "Clique";
        btn.addEventListener("click", () => {
            this.renderPage(1);
        })
        footerContainer.appendChild(btn);

        return {
            header: headerContainer,
            body: bodyContainer,
            footer: footerContainer
        }
    }

    private pageTwo(): PagePaginator {
        //header
        const headerContainer = document.createElement("div") as HTMLDivElement;
        const h1 = document.createElement("h1");
        h1.innerText = "Portas Lógicas - Porta Buffer";
        headerContainer.appendChild(h1);

        //body
        const bodyContainer = document.createElement("div") as HTMLDivElement;
        const link = document.createElement("link");
        link.rel = "stylesheet"
        link.href = "./src/pages/portas_logicas/portas_logicas.css";
        bodyContainer.appendChild(link);
        const bodyContent = document.createElement("h1");
        bodyContent.innerText = "Conteudo"
        bodyContent.classList.add("title")
        bodyContainer.appendChild(bodyContent);

        //footer
        const footerContainer = document.createElement("div") as HTMLDivElement;
        const btn = document.createElement("button");
        btn.innerText = "Clique";
        btn.addEventListener("click", () => {
            const desligada = document.getElementById("luz") as HTMLDivElement;
            desligada.innerText = "ligada"
        })
        footerContainer.appendChild(btn);

        return {
            header: headerContainer,
            body: bodyContainer,
            footer: footerContainer
        }
    }

}
