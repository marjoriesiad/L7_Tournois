async function getTeams() {
    const response = await fetch("scripts/data.json");
    const teams = await response.json();
    return teams;
}

async function displayTeams(teams) {
    const teamSection = document.querySelector(".teams_section");
    teams.forEach((team) => {
        const teamModel = teamFactory(team);
        const teamCardDOM = teamModel.getTeamCardDOM();
        teamSection.appendChild(teamCardDOM);
    });
}


async function init() {
    const { teams } = await getTeams();
    displayTeams(teams);
}

init();