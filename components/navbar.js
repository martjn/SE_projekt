

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.gallery = "galerii.html"
        this.prices = "hinnakiri.html"
        this.landing_page = "index.html"
        this.booking = "broneering.html"
        this.pizzas = [
            {name: "Salaami"},
            {name: "Margherita"},
            {name: "Frutti di Mare"},
            {name: "Siciliana"}
        ]
    }

    connectedCallback() {
        this.innerHTML = `
            <style> @import url("components/navbar.css");</style>
            <nav class="navbar">
            <div class="logo">
            <a href="${this.landing_page}">PkPR</a>
            </div>
            <ul class="nav-links">
                <div class="menu">
                    <li><a href="${this.booking}">Broneerimine</a></li>
                    <li class="pizzas">
                    <a href="${this.prices}">Hinnad</a>
                        <ul class="dropdown">
                            ${
                                this.pizzas.map(pizza => {
                                    return(`<li><a href="${this.prices}#${pizza.name}">${pizza.name}</a></li>`);
                                }).join("\n")
                            }
                        </ul>
                    </li>
                    <li><a href="${this.gallery}">Galerii</a></li>
                </div>
            </ul>
            </nav>
        `
    }
}

customElements.define('nav-bar', Navbar)