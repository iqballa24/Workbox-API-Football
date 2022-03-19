class Footer extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = `
            <div class="page-footer purple darken-4">
                <div class="footer-copyright">
                    <div class="container center">
                        © 2020 Submission 3 Dicoding
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("footer", Footer);