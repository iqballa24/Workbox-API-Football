function showTeams(data) {
    let teamsHTML = "";
    data.teams.forEach(team => {
        teamsHTML += `
            <div class="col s12 m4">
            <div class="card small" style="margin: 15px auto; ">
                <a href="./detail.html?id=${team.id}">
                    <div class="card-image waves-effect waves-block waves-light" style="padding : 20px;">
                        <img class="responsive-img" src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${team.name}">
                    </div>
                </a>
                <div class="card-action purple darken-4 white-text">
                    <span class="card-title truncate">${team.name}</span>
                    <a href="./detail.html?id=${team.id}">SEE DETAILS</a>
                 </div>
                </div>
            </div>
             `
    })
    document.getElementById('progress').style.display = 'none'
    document.getElementById("club").innerHTML = teamsHTML;
}

function showTeamById(data) {
    let playerHTML = "";
    data.squad.forEach(player => {
        playerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.position}</td>
                <td>${player.shirtNumber}</td>
            </tr>
                `;
    });

    const detailHTML = `
        <h3 class="grey-text center-align">Team Info</h3>
        <div class="divider"></div>
        <div class="row">
            <div class ="col s1 m2"></div>
            <div class="col s10 m8">
            <div class="card" style="margin-top: 30px;">
                <div class="card-image" style="padding: 50px;">
                    <img class="responsive-img" src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="club">
                </div>
                <div class="card-content">
                    <h5 class="purple-text center-align">${data.name}</h5>
                    <div class="divider"></div>
                    <h6 class="center-align">Stadium : ${data.venue}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Address : ${data.address}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Email : ${data.email}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Website : <a href =" ${data.website}">${data.website}</a></h6>
                </div>
            </div>
            </div>
            <div class ="col s1 m2"></div>
        </div>
        <h3 class="grey-text center-align">Players</h3>
        <div class="divider"></div>
        <div class="row">
            <div class="card">
            <table class="striped centered responsive-table" style="margin-top: 30px;">
                <thead class="purple darken-4 white-text">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Shirt Number</th>
                    </tr>
                </thead>
                <tbody>
                    ${playerHTML}
                </tbody>
            </table>
            </div>
        </div>
        `;
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById('progress').style.display = 'none'
    document.getElementById("body-content").innerHTML = detailHTML;
}

export { showTeams, showTeamById};