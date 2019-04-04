class Game {
  constructor(canvas) {
    this.canvas = document.getElementById(canvas),
      this.ctx = this.canvas.getContext("2d"),
      this.fps = 60,
      // this.scoreBoard = undefined,
      this.canvas.width = 832;
      this.canvas.height = 915;
      this.framesCounter = 0;
      this.ball = [];
      this.adversaryRival = [];
      this.adversaryInvencible = [];
      this.reward = [];
      this.penalty = [];
      this.started = false;
      this.timming = 0;
      this.interval = this.interval
    };

  init() {
    this.Background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.Character = new Character(this.posX, this.posY, this.ctx, this.canvas);
    this.Rival = new Rival("./Images/Adversario.png", this.posX, this.posY, this.ctx);
    this.Invencible = new Invencible("./Images/Invencible_1.png", this.posX, this.posY, this.ctx, this.canvas);
    this.Sinbin = new Sinbin(this.posX, this.posY, this.ctx, this.canvas);
    this.WorldCup = new WorldCup(this.posX, this.posY, this.ctx, this.canvas);
    this.Ball = new Ball(this.posX, this.posY, this.ctx, this.canvas);


    //ScoreBoard.init(this.ctx);
  };

  catchBall() {
    this.started = true;
    setInterval(() => {
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
    this.startGame();
    }
    }, 1000/60)
  };

  startGame() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, 832, 915);
      this.timming++;
      this.Background.draw();
      this.Background.move();
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
      this.reward.forEach((cup) => {
        cup.draw(this.timming);
        cup.move();
      });
      if (this.collisionsRival()) {
        this.Rival.gravity++;
      } else if (this.collisionsInvencible()) {
        this.Character.posY += 50;
        this.Character.scoreBoard -= 100;
      } else if (this.collisionsWorldCup()) {
        this.Character.scoreBoard + 100;
        this.Character.speed++;
      } else if (this.collisionsSinbin()) {
        this.Character.scoreBoard - 50;
        this.Character.speed--;
      }
      }, 1000 / 60);
  };

    generateBalls() {
      if (this.timming % 300 === 0) {
        this.ball.push(new Ball(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeBalls() {
      for (var i = 0; i < this.ball.length; i++) {
        if (this.ball[i].x >= this.w) {
            this.ball.splice(i, 1);
        }
      }
    };

    generateAdversaryRival() {
      if (this.timming % 120 === 0) {
        this.adversaryRival.push(new Rival("./Images/Adversario.png", this.width, this.height, this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeAdversaryRival() {
      for (var i = 0; i < this.adversaryRival.length; i++) {
        if (this.adversaryRival[i].x >= this.w) {
          this.adversaryRival.splice(i, 1);
        }
      }
    };

    generateAdversaryInvencible() {
      if (this.timming % 120 === 0) {
        this.adversaryInvencible.push(new Invencible("./Images/Invencible.png", this.width, this.height, this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeAdversaryInvencible() {
      for (var i = 0; i < this.adversaryInvencible.length; i++) {
        if (this.adversaryInvencible[i].x >= this.w) {
          this.adversaryInvencible.splice(i, 1);
        }
      }
    };

    generatePenalties() {
      if (this.timming % 120 === 0) {
        this.penalty.push(new Sinbin(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removePenalties() {
      for (var i = 0; i < this.penalty.length; i++) {
        if (this.penalty[i].x >= this.w) {
          this.penalty.splice(i, 1);
        }
      }
    };

    generateWorldCup() {
      if (this.timming % 120 === 0) {
        this.reward.push(new WorldCup(this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeWorldCup() {
      for (var i = 0; i < this.reward.length; i++) {
        if (this.reward[i].x >= this.w) {
          this.reward.splice(i, 1);
        }
      }
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
}