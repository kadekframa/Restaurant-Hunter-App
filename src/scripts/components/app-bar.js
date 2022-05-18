class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="header-inner">
            <h1 class="header-title">Restaurant Hunter</h1>
        </div>
        <button id="menu" class="header-menu" aria-label="menu drawer">☰</button>

        <nav id="drawer" class="nav">
            <ul class="nav-list">
                <li class="nav-item"><a class="nav-item-anchor" href="#/home">Home</a></li>
                <li class="nav-item"><a class="nav-item-anchor" href="#/favorite">Favorite</a></li>
                <li class="nav-item"><a class="nav-item-anchor after-this" href="https://www.linkedin.com/in/kadek-frama-danamastyana-b534211b7/" target="_blank" rel="noreferrer">About Us</a></li>
            </ul>
        </nav>
        `;
    }
};

customElements.define('app-bar', AppBar);
