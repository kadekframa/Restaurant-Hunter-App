class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <p tabindex="0">
            All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding Indonesia</a>
        </p>
        `;
    }
};

customElements.define('footer-bar', FooterBar);
