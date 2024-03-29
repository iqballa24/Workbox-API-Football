class Club extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="section">
                <h3 class="header center grey-text">Teams Of Premier League</h3>
                <div class="divider" style="margin-left: 50px; margin-right: 50px;"></div>
                <pre-loader id="progress"></pre-loader>
                <div class="row" id="club" style="margin: 40px; "></div>
            </div>
        `;
    }
}

customElements.define("club-item", Club);