

class Footbar extends HTMLElement {
    constructor() {
        super();
        this.gallery = "galerii.html"
        this.prices = "hinnakiri.html"
        this.landing_page = "index.html"
        this.booking = "broneering.html"
    }

    connectedCallback() {
        this.innerHTML = `
            <style> @import url("components/foot.css");</style>
            <nav class="foot-bar">
            <div class="logo">
            <a href="${this.landing_page}">PkPR</a>
            </div>
            <ul class="nav-links">
                <div class="menu">
                    <li><a href="${this.booking}">Broneerimine</a></li>
                    <li class="pizzas">
                    <a href="${this.prices}">Hinnad</a>
                    </li>
                    <li><a href="${this.gallery}">Galerii</a></li>
                </div>
            </ul>
            </nav>
        `
    }
}

customElements.define('foot-bar', Footbar)