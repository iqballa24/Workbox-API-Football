// component
import "./component/bottom-bar.js";
import "./component/navbar.js";
import "./component/preloader.js";
import "./component/standing.js";
import "./component/club.js";
import "./component/topScorer.js";
import "./component/favourite.js";

// view
import { loadNav, loadPage } from "./view/nav.js";
import { registerServiceWorker, requestPermission } from "./view/main.js";


document.addEventListener("DOMContentLoaded", function () {
    // Activate sidebar nav
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems); 
    loadNav();

    // Load pages content
    let page = window.location.hash.substr(1);
    if (page === "") page = "home";
    loadPage(page);

});

if (!("serviceWorker" in navigator)) {
    console.error("ServiceWorker: Browser tidak mendukung.");
} else {
    registerServiceWorker();
    requestPermission();
}
