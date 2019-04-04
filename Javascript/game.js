class Game {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60;
      this.canvas.width = 832;
      this.canvas.height = 915;
      this.ball = [];
      this.adversaryRival = [];
      this.timeRival = 200;
      this.adversaryInvencible = [];
      this.timeInvencible = 300;
      this.reward = [];
      this.timeReward = 200;
      this.penalty = [];
      this.timePenalty = 200;
      this.started = false;
      this.timming = 0;
      this.interval = this.interval
    };

  init() {
    this.Background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.Character = new Character(this.posX, this.posY, this.ctx, this.canvas);
    this.Rival = new Rival("./Images/Adversario.png", this.width, this.height,this.posX, this.posY, this.ctx, this.canvas);
    this.Invencible = new Invencible("./Images/Invencible_1.png", this.width, this.height,this.posX, this.posY, this.ctx, this.canvas);
    this.Sinbin = new Sinbin(this.posX, this.posY, this.ctx, this.canvas);
    this.WorldCup = new WorldCup(this.posX, this.posY, this.ctx, this.canvas);
    this.Ball = new Ball(this.posX, this.posY, this.ctx, this.canvas);
    this.ScoreBoard = new Scoreboard(this.posX, this.posY, this.ctx, this.canvas);
    this.Time = new Time (this.ctx, this.canvas);

  };

  catchBall() {
    this.started = true;
    this.ballInterval = setInterval(() => {
    this.ctx.clearRect(0, 0, 832, 915);
    this.timming++;
    this.Background.draw();
    this.Background.move();
    this.Character.draw();
    this.Character.setListeners();
    this.generateBalls();
    this.removeBalls();
    this.ball.forEach((balls) => {
      balls.draw(this.timming);
      balls.move();
    });
    if (this.collisionsBall()) {
    clearInterval(this.ballInterval)
    this.startGame();
    };
    }, 1000/60)
  };

  startGame() {
    this.gameInterval = setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.timming++;
      this.Background.draw();
      this.Background.move();
      this.ScoreBoard.rect();
      this.ScoreBoard.draw();
      this.Character.draw();
      this.Character.setListeners();
      this.generateAdversaryRival();
      this.removeAdversaryRival();
      this.adversaryRival.forEach((enemy) => {
        enemy.draw(this.timming);
        enemy.move();
      });
      this.generateAdversaryInvencible();
      this.removeAdversaryInvencible();
      this.adversaryInvencible.forEach((enemy) => {
        enemy.draw(this.timming);
        enemy.move();
      });
      this.generatePenalties();
      this.removePenalties();
      this.penalty.forEach((card) => {
        card.draw(this.timming);
        card.move();
      });
      this.generateWorldCup();
      this.removeWorldCup();
      this.reward.forEach((cup) => {
        cup.draw(this.timming);
        cup.move();
      });
      if (this.collisionsRival() && this.timming % 10 === 0) {
          this.Rival.posY -= 50;
          this.ScoreBoard.score - 10;
          this.Character.posY += 40;
        } else if (this.collisionsInvencible() && this.timming % 10 === 0) {
          this.Character.posY += 40;
          this.ScoreBoard.score -= 50;
        } else if (this.collisionsWorldCup() && this.timming % 2 === 0) {
          this.Character.points += 0.5;
          this.ScoreBoard.score += 50;
        } else if (this.collisionsSinbin() && this.timming % 10 === 0) {
          this.ScoreBoard.score -= 30;
        }
      console.log(this.Character.points) 
      console.log(this.timming)
      if (this.ScoreBoard.score === 0 || this.timming == 2700) {
        clearInterval(this.gameInterval)
        this.gameOver();
        this.reset();
      } else if (this.Character.points === 5) {
      clearInterval(this.gameInterval)
      this.win();
      this.nextLevel();
      };
      }, 1000 / 60);
  };

    generateBalls() {
      if (this.timming % 300 === 0) {
        this.ball.push(new Ball(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeBalls() {
      this.ball = this.ball.filter(ball=> {
        if(!(ball.posY >= this.canvas.height)) return ball;
      })
    };

    generateAdversaryRival() {
      if (this.timming % this.timeRival === 0) {
        this.adversaryRival.push(new Rival("./Images/Adversario.png", this.width, this.height, this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeAdversaryRival() {
      this. adversaryRival = this.adversaryRival.filter(rival=> {
        if(!(rival.posY >= this.canvas.height)) return rival;
      })
    };

    generateAdversaryInvencible() {
      if (this.timming % this.timeInvencible === 0) {
        this.adversaryInvencible.push(new Invencible("./Images/Invencible.png", this.width, this.height, this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeAdversaryInvencible() {
      this. adversaryInvencible = this.adversaryInvencible.filter(invencible=> {
        if(!(invencible.posY >= this.canvas.height)) return invencible;
      })
    };

    generatePenalties() {
      if (this.timming % this.timePenalty === 0) {
        this.penalty.push(new Sinbin(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removePenalties() {
      this.penalty = this.penalty.filter(card=> {
        if(!(card.posY >= this.canvas.height)) return card;
      })
    };

    generateWorldCup() {
      if (this.timming % this.timeReward === 0) {
        this.reward.push(new WorldCup(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeWorldCup() {
      this.reward = this.reward.filter(cup=> {
        if(!(cup.posY >= this.canvas.height)) return cup;
      })
    };

    collisionsBall() {
      return this.ball.some(rugbyBalls => {
        return (
        this.Character.posX < (rugbyBalls.posX + rugbyBalls.width) &&
        (this.Character.posX + this.Character.width) > rugbyBalls.posX &&
        this.Character.posY < (rugbyBalls.posY + rugbyBalls.height) &&
        (this.Character.posY + this.Character.height) > rugbyBalls.posY
        )
      })
    };

    collisionsRival() {
      return this.adversaryRival.some(rival => {
        return (
        this.Character.posX < (rival.posX + rival.width) &&
        (this.Character.posX + this.Character.width) > rival.posX &&
        this.Character.posY < (rival.posY + rival.height) &&
        (this.Character.posY + this.Character.height) > rival.posY
        )
      })
    }; 

    collisionsInvencible() {
      return this.adversaryInvencible.some(invencible => {
        return (
        this.Character.posX < (invencible.posX + invencible.width) &&
        (this.Character.posX + this.Character.width) > invencible.posX &&
        this.Character.posY < (invencible.posY + invencible.height) &&
        (this.Character.posY + this.Character.height) > invencible.posY
        )
      })
    };

    collisionsWorldCup() {
      return this.reward.some(cup => {
        return (
        this.Character.posX < (cup.posX + cup.width) &&
        (this.Character.posX + this.Character.width) > cup.posX &&
        this.Character.posY < (cup.posY + cup.height) &&
        (this.Character.posY + this.Character.height) > cup.posY
        )
      })
    };

    collisionsSinbin() {
      return this.penalty.some(card => {
        return (
        this.Character.posX < (card.posX + card.width) &&
        (this.Character.posX + this.Character.width) > card.posX &&
        this.Character.posY < (card.posY + card.height) &&
        (this.Character.posY + this.Character.height) > card.posY
        )
      });
    };

    win() {
      return document.querySelector("#win");
    };

    nextLevel() {
      this.adversaryRival = [];
      this.timeRival = 200;
      this.adversaryInvencible = [];
      this.timeInvencible = 300;
      this.reward = [];
      this.timeReward = 200;
      this.penalty = [];
      this.timePenalty = 200;
    }

    gameOver() {
      return document.getElementById("#lose");
    };

    reset() {
      this.init();
    };
  }