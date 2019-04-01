var myGame = new Game ("container");

window.onload = function(){
    myGame.init();
}; 

document.getElementById("#start").onclick = function() {
    if(!myGame.started) myGame.startGame();
};

//     var myBackground = new Background(this.w, this.h, ctx);

//     function startGame() {
//         console.log('startgame')
      
//         myBackground.draw();
//     }
// };