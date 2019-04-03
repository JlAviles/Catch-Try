class Game{
    constructor(canvas){
      this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60,
      // this.scoreBoard = undefined,
      this.canvas.width = 832;
      this.canvas.height = 915;
      this.framesCounter = 0;
      this.adversaries = [];
      this.reward = [];
      this.penalty = [];
      this.started = false;
      this.timming = 0;
    };
    
    init() {
      this.myBackground = new Background(this.canvas.width, this.canvas.height, this.ctx);
      this.myCharacter = new Character(this.posX, this.posY,this.ctx,this.canvas);
      this.myRival = new Rival("./Images/Adversario.png",this.posX, this.posY, this.ctx, this.canvas);
      this.myInvencible = new Invencible ("./Images/Invencible_1.png",this.posX, this.posY, this.ctx, this.canvas);
      this.mySinbin = new Sinbin (this.posX, this.posY, this.ctx, this.canvas);
      
      //ScoreBoard.init(this.ctx);
    };

    startGame() {
      this.started = true
          setInterval(() => {
          this.ctx.clearRect(0,0,832,915);
          this.timming++
          this.myBackground.draw();
          this.myBackground.move();
          this.myCharacter.draw();
          this.myCharacter.setListeners();
          this.generateAdversaries();
          this.move();
          this.adversaries.forEach((enemy) => {
            enemy.draw(this.timming);
            enemy.move();
          });
          this.mySinbin.draw();
          this.mySinbin.move();
        }, 1000/60);
      };

      generateAdversaries() {
        if (this.timming % 60 === 0) {
          this.adversaries.push( new Rival("./Images/Adversario.png",this.posX, this.posY, this.ctx, this.canvas));
          this.adversaries.push( new Invencible ("./Images/Invencible_1.png",this.posX, this.posY, this.ctx, this.canvas));

        }
      };

      move() {
        for (var i = 0; i < this.adversaries.length; i++) {
          if (this.adversaries[i].x >= this.w) {
            this.adversaries.splice(i, 1);
            console.log(this.adversaries)
          }
        }
      };

      collisions() {


      };
  
}