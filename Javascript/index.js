var myGame = new Game ("container");
var win = document.querySelector("#win");
var gameOver = document.getElementById("#lose");

window.onload = function(){
    myGame.init();
}; 

document.getElementById("#start").onclick = function() {
    if(!myGame.started) myGame.catchBall();
};