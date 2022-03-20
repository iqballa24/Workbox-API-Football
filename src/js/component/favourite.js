class Favourite extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="row">
                <h3 class="header center grey-text">Favorite Teams</h3>
                <div class="divider" style="margin-left: 50px; margin-right: 50px;" ></div>
                <pre-loader id="progress"></pre-loader>
                <div class="row" id="liked" style="margin: 40px; "></div>
            </div>
    
        `;
    }
}

customElements.define("favourite-item", Favourite);