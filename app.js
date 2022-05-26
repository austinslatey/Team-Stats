const team = {
    _players: [
        {
            firstName: 'abc',
            lastName: 'zxy',
            age: 3,
        },
        {
            firstName: 'ccb',
            lastName: 'zzy',
            age: 33,
        },
        {
            firstName: 'bnb',
            lastName: 'zynth',
            age: 333,
        },
    ],
    _games: [
        {
            opponent: "blue",
            teamPoints: "25",
            opponentPoints: "26",
        },
        {
            opponent: "blue",
            teamPoints: "222",
            opponentPoints: "221",
        },
        {
            opponent: "blue",
            teamPoints: "2214",
            opponentPoints: "22441",
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints,
        };
        this.games.push(game);
      },
}


team.addPlayer('duke', 'dukeski', 24);
team.addGame("bluuue", "17", '17');
console.log(team._players);
console.log(team._games);