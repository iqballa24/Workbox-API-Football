function showStanding(data) {
    let standingsHTML = "";
    const standingElement = document.getElementById("standings");

    data.standings[0].table.forEach(standing => {
        standingsHTML += `
                <tr>
                    <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                    <td>${standing.team.name}</td>
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
    document.getElementById('progress').style.display = 'none'
    standingElement.innerHTML = `

                <div class="card" style=" margin-top: 30px;">
                <table class="striped centered responsive-table">
                    <thead class="purple darken-4 white-text">
                        <tr>
                            <th></th>
                            <th>Team Name</th>
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

export default showStanding;