class Game{
    constructor(canvas){
      this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60,
      // this.scoreBoard = undefined,
      this.keys = {
        right: 37,
        left: 39,
        TOP_KEY: 38
      },
      this.started = false
    };
    
    init() {
      console.log("a")

      this.myBackground = new Background(this.canvas.width, this.canvas.height, this.ctx);
      this.myCharacter = new Character(this.canvas.width,this.canvas.height,this.ctx);
  
      //ScoreBoard.init(this.ctx);

    }

    startGame() {
      this.started = true
      console.log("Click dentro")
          setInterval(() => {
          this.ctx.clearRect(0,0,832,925);
          this.myBackground.draw();
          this.myBackground.move();
          this.myCharacter.draw();
          // this.framesCounter++;
        }, 1000/60);
      }
}