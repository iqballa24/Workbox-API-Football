import {getTeamById, getLikedTeamById} from "./api.js";
import { dbInsertTeam } from "./db.js";

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
