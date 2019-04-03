class Game {
  constructor(canvas) {
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
    this.Background = new Background(this.canvas.width, this.canvas.height, this.ctx);
    this.Character = new Character(this.posX, this.posY, this.ctx, this.canvas);
    this.Rival = new Rival("./Images/Adversario.png", this.posX, this.posY, this.ctx, this.canvas);
    this.Invencible = new Invencible("./Images/Invencible_1.png", this.posX, this.posY, this.ctx, this.canvas);
    this.Sinbin = new Sinbin(this.posX, this.posY, this.ctx, this.canvas);
    this.WorldCup = new WorldCup(this.posX, this.posY, this.ctx, this.canvas);


    //ScoreBoard.init(this.ctx);
  };

  startGame() {
    this.started = true
    setInterval(() => {
      this.ctx.clearRect(0, 0, 832, 915);
      this.timming++
      this.Background.draw();
      this.Background.move();
      this.Character.draw();
      this.Character.setListeners();
      this.generateAdversaries();
      this.removeAdversaries();
      this.adversaries.forEach((enemy) => {
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
      console.log(this.collisions())
      if (this.collisionsRival() === true) {
        this.Character.gravity++;
        this.Rival.gravity++;
      } else if (this.collisionsInvencible()) {
        this.Character.scoreBoard - 100;
        console.log(this.Character.scoreBoard)
      } else if (this.collisionsWorldCup() === true) {
        this.Character.scoreBoard + 100;
        this.Character.speed++;
      } else if (this.collisionsSinbin() === true) {
        this.Character.scoreBoard - 50;
        this.Character.speed--;
      }
      }, 1000 / 60);
  };

    generateAdversaries() {
      if (this.timming % 120 === 0) {
        this.adversaries.push(new Rival("./Images/Adversario.png", this.posX, this.posY, this.ctx, this.canvas));
        this.adversaries.push(new Invencible("./Images/Invencible_1.png", this.posX, this.posY, this.ctx, this.canvas));
      }
    };

    removeAdversaries() {
      for (var i = 0; i < this.adversaries.length; i++) {
        if (this.adversaries[i].x >= this.w) {
          this.adversaries.splice(i, 1);
        }
      }
    };

    generatePenalties() {
      if (this.timming % 120 === 0) {
        this.adversaries.push(new Sinbin(this.posX, this.posY, this.ctx, this.canvas));
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

    collisions() {
      return this.adversaries.some(rival => {
        return (
        this.Character.posX < (rival.posX + rival.width) &&
        (this.Character.posX + this.Character.width) > rival.posX &&
        this.Character.posY < (rival.posY + rival.height) &&
        (this.Character.posY + this.Character.height) > rival.posY
        )
      });
      return this.adversaries.some(invencible => {
        return (
        this.Character.posX < (invencible.posX + invencible.width) &&
        (this.Character.posX + this.Character.width) > invencible.posX &&
        this.Character.posY < (invencible.posY + invencible.height) &&
        (this.Character.posY + this.Character.height) > invencible.posY
        )
      });
      return this.reward.some(cup => {
        return (
        this.Character.posX < (cup.posX + cup.width) &&
        (this.Character.posX + this.Character.width) > cup.posX &&
        this.Character.posY < (cup.posY + cup.height) &&
        (this.Character.posY + this.Character.height) > cup.posY
        )
      });
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