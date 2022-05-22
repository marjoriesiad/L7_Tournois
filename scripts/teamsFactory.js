function teamFactory(data) {
    const { name, player_1, player_2, player_3, player_4, killer } = data;

    function getTeamCardDOM() {
        const article = document.createElement("article");
        const teamName = document.createElement("h2");
        const playerList = document.createElement("ul");
        const playerOne = document.createElement("li");
        const playerTwo = document.createElement("li");
        const playerThree = document.createElement("li");
        const playerFour = document.createElement("li");
        const playerKiller = document.createElement("li");


        teamName.textContent = name;

        playerOne.textContent = "Joueur 1: " + player_1;
        playerTwo.textContent = "Joueur 2: " + player_2;
        playerThree.textContent = "Joueur 3: " + player_3;
        playerFour.textContent = "Joueur 4: " + player_4;
        playerKiller.textContent = "Tueur: " + killer;

        article.appendChild(teamName);
        article.appendChild(playerList);
        playerList.appendChild(playerOne);
        playerList.appendChild(playerTwo);
        playerList.appendChild(playerThree);
        playerList.appendChild(playerFour);
        playerList.appendChild(playerKiller);

        return (article);
    }

    return { name, player_1, player_2, player_3, player_4, killer, getTeamCardDOM };
}