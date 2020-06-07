function showTopScorer(data) {
    let topScorerHTML = "";
    const topScorerElement = document.getElementById("topScorer")

    data.scorers.forEach(data => {
        topScorerHTML += `
            <tr>
                <td>${data.player.name}</td>
                <td>${data.team.name}</td>
                <td>${data.numberOfGoals}</td>
            </tr>
             `;
    });
    document.getElementById('progress').style.display = 'none'
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
            `
}

export default showTopScorer;