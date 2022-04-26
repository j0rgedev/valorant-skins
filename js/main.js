class myHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <h1>Valorant Skins</h1>
        <nav>
            <ul class="nav_items">
                <li><a href="#">Home</a></li>
                <li><a href="#">Características</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>`
    }
}

customElements.define('my-header',myHeader);
