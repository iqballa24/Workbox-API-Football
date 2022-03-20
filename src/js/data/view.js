function showStanding(data) {
  let standingsHTML = "";
  const standingElement = document.getElementById("standings");
  let x = "1";

  data.standings[0].table.forEach((standing) => {
    standingsHTML += `
                <tr>
                    <td>${x++}</td>
                    <td><img src="${standing.team.crestUrl.replace(
                      /^http:\/\//i,
                      "https://"
                    )}" width="30px" alt="badge"/></td>
                    <td class="hide-on-med-and-down">${standing.team.name}</td>
                    <td>${standing.won}</td>
                    <td>${standing.draw}</td>
                    <td>${standing.lost}</td>
                    <td>${standing.points}</td>
                    <td>${standing.goalsFor}</td>
                    <td>${standing.goalsAgainst}</td>
                    <td>${standing.goalDifference}</td>
                </tr>
        `;
  });
  document.getElementById("progress").style.display = "none";
  standingElement.innerHTML = `

                <div class="card" style="margin-top: 30px;">
                <table class="striped centered responsive-table">
                    <thead class="purple darken-4 white-text">
                        <tr class="z-depth-3">
                            <th>Position</th>
                            <th>Club</th>
                            <th class="hide-on-med-and-down"></th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>P</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                        </tr>
                     </thead>
                    <tbody id="standings">
                        ${standingsHTML}
                    </tbody>
                </table>
                
                </div>
    `;
}

function showLikedTeams(data) {
  let teamsHTML = "";

  data.forEach((team) => {
    teamsHTML += `
                <div class="col s12 m4">
                <div class="card small" style="margin: 15px auto; ">
                    <a href="./fav.html?id=${team.id}">
                        <div class="card-image waves-effect waves-block waves-light" style="padding : 20px;">
                            <img class="responsive-img" src="${team.crestUrl}" alt="image" >
                        </div>
                    </a>
                    <div class="card-action purple darken-4 white-text">
                        <span class="card-title truncate">${team.name}</span>
                        <a href="./fav.html?id=${team.id}">SEE DETAILS</a>
                    </div>  
                </div>
                </div>
                 `;
  });

  // Sisipkan komponen card ke dalam elemen dengan id #body-content
  if (data.length == 0)
    teamsHTML +=
      '<div class="chip center-align">You haven`t added a favorite team </div>';
  document.getElementById("progress").style.display = "none";
  document.getElementById("liked").innerHTML = teamsHTML;
}

function showLikedTeamById(data) {
  let playerHTML = "";
  data.squad.forEach((player) => {
    playerHTML += `
                <tr>
                    <td>${player.name}</td>
                    <td>${player.position}</td>
                    <td>${player.shirtNumber}</td>
                </tr>
                    `;
  });
  let teamHTML = `
            <h3 class="grey-text center-align">Team Info</h3>
            <div class="divider"></div>
            <div class="row">
                <div class ="col s1 m2"></div>
                <div class="col s10 m8">
                <div class="card" style="margin-top: 30px;">
                    <div class="card-image" style="padding: 50px;">
                        <img class="responsive-img" src="${data.crestUrl}" alt="club">
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
  document.getElementById("progress").style.display = "none";
  document.getElementById("body-content").innerHTML = teamHTML;
}

function showTopScorer(data) {
  let topScorerHTML = "";
  const topScorerElement = document.getElementById("topScorer");

  data.scorers.forEach((data) => {
    topScorerHTML += `
            <tr>
                <td>${data.player.name}</td>
                <td>${data.team.name}</td>
                <td>${data.numberOfGoals}</td>
            </tr>
             `;
  });
  document.getElementById("progress").style.display = "none";
  topScorerElement.innerHTML = `
            <div class="card">
            <table class="striped centered responsive-table">
                <thead  class="purple darken-4 white-text">
                    <tr>
                        <th>Player</th>
                        <th>Team Name</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    ${topScorerHTML}
                </tbody>
            </table>
            </div>
            `;
}

function showTeams(data) {
  let teamsHTML = "";
  data.teams.forEach((team) => {
    teamsHTML += `
            <div class="col s12 m4">
            <div class="card small" style="margin: 15px auto; ">
                <a href="./detail.html?id=${team.id}">
                    <div class="card-image waves-effect waves-block waves-light" style="padding : 20px;">
                        <img class="responsive-img" src="${team.crestUrl.replace(
                          /^http:\/\//i,
                          "https://"
                        )}" alt="${team.name}">
                    </div>
                </a>
                <div class="card-action purple darken-4 white-text">
                    <span class="card-title truncate">${team.name}</span>
                    <a href="./detail.html?id=${team.id}">SEE DETAILS</a>
                 </div>
                </div>
            </div>
             `;
  });
  document.getElementById("progress").style.display = "none";
  document.getElementById("club").innerHTML = teamsHTML;
}

function showTeamById(data) {
  let playerHTML = "";
  data.squad.forEach((player) => {
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
                    <img class="responsive-img" src="${data.crestUrl.replace(
                      /^http:\/\//i,
                      "https://"
                    )}" alt="club">
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
                    <h6 class="center-align">Website : <a href =" ${
                      data.website
                    }">${data.website}</a></h6>
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
  document.getElementById("progress").style.display = "none";
  document.getElementById("body-content").innerHTML = detailHTML;
}

export {
  showStanding,
  showLikedTeams,
  showLikedTeamById,
  showTopScorer,
  showTeams,
  showTeamById,
};
