class Game{
    constructor(){
        this.computerImg = loadImage("images/computer_paddles.webp");
        this.playerImg = loadImage("images/player_paddle.webp");
    }
    getGameState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    updateGameState(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
        }
        

    }
    play(){
        form.hide();
    }
    end(){
        
    }
}