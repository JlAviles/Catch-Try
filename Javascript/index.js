var myGame = new Game ("container");

window.onload = function(){
    myGame.init();
}; 

document.getElementById("start").onclick = function() {
    if(!myGame.started) myGame.catchBall();
    console.log("hola")
};

document.getElementById("instructions").onclick = function() {
    return 
}