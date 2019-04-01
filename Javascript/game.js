var Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreBoard: undefined,
    width: 0,
    height: 0,
    keys: {
      right: 37,
      left: 39,
      TOP_KEY: 38,
    },
   

    init: function(canvas) {
      this.canvas = document.getElementById(canvas);
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 832;
      this.canvas.height = 925;

      this.myBackground = new Background(this.canvas.width, this.canvas.height, this.ctx);
      // this.myCharacter = new Character(80,60,this.ctx,this.keys)
  
      //ScoreBoard.init(this.ctx);
  
      this.startGame();
    },
    startGame: function(){
          setInterval(() => {
          this.ctx.clearRect(0,0,832,925);
          this.myBackground.draw();
          this.myBackground.move();
          // this.myCharacter.draw();
        }, 1000/60);
    
      }
    }
    // start: function() {
    //   this.fps = 60;
  
    //   this.reset();
  
    //   this.interval = setInterval(() => {
    //     this.clear();
  
    //     this.framesCounter++;
    //   }
    // }