import { getAllStandings, getAllTeams, getTopScorer, getLikedTeams} from "../data/api.js";

let page = window.location.hash.substr(1);
if (page === "") page = "home";

function loadNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status !== 200) return;

            // Muat daftar tautan menu
            document.querySelectorAll(".topnav, .sidenav").forEach(elm => {
                elm.innerHTML = xhttp.responseText;
            });

            // Daftarkan event listener untuk setiap tautan menu
            document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
                elm.addEventListener("click", event => {
                    // Tutup sidenav
                    let sidenav = document.querySelector(".sidenav");
                    M.Sidenav.getInstance(sidenav).close();

                    // Muat konten halaman yang dipanggil
                    page = event.target.getAttribute("href").substr(1);
                    loadPage(page);
                });
            });
        }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
}
function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        const content = document.querySelector("#body-content");
        if (this.readyState === 4) {
            if (page === "home") {
                getAllStandings();
            } else if (page === "club") {
                getAllTeams();
            } else if (page === "topScorers") {
                getTopScorer();
            } else if (page === "favourite") {
                getLikedTeams();
            }

            if (this.status === 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status === 404) {
                content.innerHTML = "<p>404 Page not found</p>";
            } else {
                content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
        }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
}

export {loadNav, loadPage};
