// component
import "./component/navbar-detail.js";
import "./component/bottom-bar.js";
import "./component/preloader.js";
import "./component/btnLike.js";

import {getTeamById, getLikedTeamById} from "./data/api.js";
import { dbInsertTeam } from "./data/db.js";

document.addEventListener("DOMContentLoaded", () => {

    const item = getTeamById();
    const btnLike = document.getElementById('btnLike');

    btnLike.addEventListener("click", () => {
        item.then(team => {
            dbInsertTeam(team);
            console.log(team.id)
        })
    })
    
});
