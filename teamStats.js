team = {
  _players: [
    {
      firstName: 'Christiano',
      lastName: 'Ronaldo',
      age: 36
    },
    {
      firstName: 'Paul',
      lastName: 'Pogba',
      age: 28
    },
    {
      firstName: 'Marcus',
      lastName: 'Rashford',
      age: 23
    }
  ],

  _games: [
    {
      opponent: 'Chelsea',
      teamPoints: 3,
      opponentPoints: 2
    },
    {
      opponent: 'Man City',
      teamPoints: 1,
      opponentPoints: 1
    },
    {
      opponent: 'Aston Villa',
      teamPoints: 4,
      opponentPoints: 1
    }
  ],

  get games() {
    return this._games;
  }, 

  get players() {
    return this._players;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Real Madrid', 2, 3);

console.log(team._games);

