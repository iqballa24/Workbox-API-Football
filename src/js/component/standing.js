class Standing extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container">
                <div class="section">
                    <h3 class="header center grey-text">Standing</h3>
                    <div class="divider"></div>
                    <pre-loader id="progress"></pre-loader>
                    <div class="row" id="standings" style="margin-top: 30px;"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("standing-item", Standing);