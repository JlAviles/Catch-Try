class Game{
    constructor(canvas){
      this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60,
      // this.scoreBoard = undefined,
      this.canvas.width = 832;
      this.canvas.height = 915;
      this.framesCounter = 0;
      this.started = false

    };
    
    init() {
      this.myBackground = new Background(this.canvas.width, this.canvas.height, this.ctx);
      this.myCharacter = new Character(this.width, this.height, this.posX, this.posY,this.ctx,this.canvas);
      this.myAdversary = new Adversary(this.width, this.height, this.posX, this.posY,this.ctx,this.canvas);
      this.myRival = new Rival(this.width, this.height,this.posX, this.posY, this.ctx, this.canvas)

      console.log(this.myRival)
      
      //ScoreBoard.init(this.ctx);

    }

    startGame() {
      this.started = true
          setInterval(() => {
          this.ctx.clearRect(0,0,832,915);
          this.myBackground.draw();
          this.myBackground.move();
          this.myCharacter.draw();
          this.myCharacter.setListeners();
          this.myAdversary.draw();
          this.myRival.draw();
          // this.framesCounter++;
        }, 1000/60);
      }
}