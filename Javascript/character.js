class Character{
    constructor(posX, posY, ctx, canvas) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = 70;
        this.height = 50;
        this.scoreBoard = 0;
        this.speed = 10;
        // this.gravity = 10;
        // this.gravitySpeed = 10;
        this.points = 0;

        this.img = new Image();
        this.img.src = "./Images/Rugbier_ok.png";

        this.vx = 1;

        this.posX = this.canvas.width / 2;
        this.posY = this.canvas.height - 100;
    
        this.img.frames = 3;
        this.img.frameIndex = 0;

        this.framesCounter = 0;

        this.keys = {
            right: 39,
            left: 37,
            run: 38,
            return: 40
        }
    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames), 
            0, 
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.posX,
            this.posY,
            this.width,
            this.height
          );
          this.animateImg(framesCounter);
    };

    animateImg(framesCounter) {
        if (framesCounter % 10 === 0) {
          this.img.frameIndex++;
        
        if (this.img.frameIndex > 2) this.img.frameIndex = 0;
        }
    };

    setListeners() {
        document.onkeydown = function(event) {
          if (event.keyCode === this.keys.right && this.posX <= (this.canvas.width - 100)) {
            this.posX += this.speed;
          } else if (event.keyCode === this.keys.left && this.posX >= (this.width)) {
            this.posX -= this.speed;
          } else if (event.keyCode === this.keys.run && this.posY >= (this.height)) {
            this.posY -= this.speed;
          } else if (event.keyCode === this.keys.return && this.posY <= (this.canvas.height - 200)) {
            this.posY += this.speed;
          }

        do {
            this.img.frameIndex;
            this.animateImg(this.framesCounter);
        } while (this.setListeners());

        }.bind(this);
    };

    slowly() {
      if (!this.yellowCard) {

      }
    }
}