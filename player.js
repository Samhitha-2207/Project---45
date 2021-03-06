class Player{
    constructor(){
        this.index = null;
        this.playerName = null;
        this.individualScore = 0;
        this.teamScore = 0;
        this.rank = null;
        this.teamName = null;
    }

    updateTeams(){
        var teamPlayerIndex = 'teams/team'+this.index;
        database.ref(teamPlayerIndex).set({
            playerName:this.playerName,
            individualScore:this.individualScore
        })
    }
    getScore(){
        var teamScoreValues = 'teams/score'+this.index;
        database.ref(teamPlayerIndex).set({
            teamName:this.teamName,
            teamScore:this.teamScore
        })
    }
    static updateScore(score){
        database.ref('/').update({
            score:score
          });
    }
    getRank(){
        var rankInfo = 'ranks/team'+this.index;
        database.ref(rankInfo).set({
            teamName:this.teamName,
            rank:this.rank
        })
    }
    updateRank(){
        database.ref('/').set({
            rank:this.rank
        })
    }
}