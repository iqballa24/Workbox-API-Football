class BtnDelete extends HTMLElement{
    connectedCallback(){
        this.render();
        this.id = this.getAttribute("id") || null;
    }

    render(){
        this.innerHTML = `
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large red" id="${this.id}">
                <i class="large material-icons">delete</i>
            </a>
        </div>
        `;
    }
}

customElements.define("btn-delete", BtnDelete);