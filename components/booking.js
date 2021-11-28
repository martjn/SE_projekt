

class Booking extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        this.innerHTML = `

        `
    }
}

customElements.define('booking', Navbar)