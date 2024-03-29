class TopScorer extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML = `
            <div class="container">
            <div class="section">
                <h3 class="header center grey-text">Top Scorer</h3>
                <div class="divider"></div>
                <pre-loader id="progress"></pre-loader>
                <div class="row" id="topScorer" style="margin-top: 30px;"></div>
            </div>
        </div>
        `;
    }
}

customElements.define("topscorer-item", TopScorer);