class Preloader extends HTMLElement{
    connectedCallback(){
        this.render();
        this.id = this.getAttribute("id") || null;
    }

    render(){
        this.innerHTML = `
            <div id="${this.id}" class="center" style="margin-top: 15px;">
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("pre-loader", Preloader);