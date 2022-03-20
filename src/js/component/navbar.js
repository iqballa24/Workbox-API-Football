class Navbar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <nav class="purple darken-4" role="navigation">
                <div class="nav-wrapper container">
                    <a href="#" class="brand-logo" id="logo-container">
                        <img class="responsive-img hide-on-med-and-down" width="40" src="src/images/EPL.png">
                        EPL<span> News</span>
                    </a>
                    <a href="#" class="sidenav-trigger" data-target="nav-mobile">
                        <i class="material-icons">menu</i></a>
                    <ul class="topnav right hide-on-med-and-down"></ul>
                    <ul class="sidenav" id="nav-mobile"></ul>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-bar", Navbar);