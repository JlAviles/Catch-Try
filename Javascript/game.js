class Game{
    constructor(canvas){
      this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60,
      // this.scoreBoard = undefined,
      // this.keys = {
      //   right: 37,
      //   left: 39,
      //   TOP_KEY: 38
      // },
      this.canvas.width = 832;
      this.canvas.height = 915;
      this.framesCounter = 0;
      this.started = false

    };
    
    init() {
      this.myBackground = new Background(this.canvas.width, this.canvas.height, this.ctx);
      this.myCharacter = new Character(this.width, this.height, this.posX, this.posY,this.ctx,this.canvas);
  
      //ScoreBoard.init(this.ctx);

    }

    startGame() {
      this.started = true
          setInterval(() => {
          this.ctx.clearRect(0,0,832,925);
          this.myBackground.draw();
          this.myBackground.move();
          this.myCharacter.draw();
          this.myCharacter.setListeners();
          // this.myCharacter.animateImg(0);
          // this.framesCounter++;
        }, 1000/60);
      }

    // move() {
    //   this.myCharacter.animateImg(0);
    // }
}