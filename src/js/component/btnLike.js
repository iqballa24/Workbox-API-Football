class BtnLike extends HTMLElement{
    connectedCallback(){
        this.render();
        this.id = this.getAttribute("id") || null;
    }

    render(){
        this.innerHTML = `
            <div id="${this.id}" class="fixed-action-btn">
                <a class="btn-floating btn-large red" >
                    <i class="large material-icons">thumb_up</i>
                </a>
            </div>
        `;
    }
}

customElements.define("btn-like", BtnLike);