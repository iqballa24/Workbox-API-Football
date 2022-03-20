// component
import "./component/navbar-detail.js";
import "./component/bottom-bar.js";

import { getTeamById ,getLikedTeamById } from "./data/api.js";
import {dbDeleteTeam} from "./data/db.js";

document.addEventListener("DOMContentLoaded", () => {

    const item = getTeamById();
    const btnDelete = document.getElementById('btnDelete');

    btnDelete.addEventListener("click", () => {
        item.then(teamId => {
            const confirma = confirm("Delete?");
            if(confirma == true){
                dbDeleteTeam(teamId)
                setTimeout(() => {
                    window.location.href = "index.html#favourite";
                }, 1000);
            }
        })
    })

    getLikedTeamById();
});