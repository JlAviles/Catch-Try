class Character{
    constructor(width, height, posX, posY, ctx, canvas) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas=canvas;
        this.width = 70;
        this.height = 50;

        this.img = new Image();
        this.img.src = "./Images/Rugbier_ok.png";

        this.vx = 1;

        // original position
        this.posX = this.canvas.width / 2;
        this.posY = this.canvas.height - 100;
    
        this.img.frames = 3;
        this.img.frameIndex = 0;

        //this.characterFrameW = 150;
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
          if (event.keyCode === this.keys.right) {
            this.posX += 10;
          } else if (event.keyCode === this.keys.left) {
            this.posX -= 10;
          } else if (event.keyCode === this.keys.run) {
            this.posY -= 10;
          } else if (event.keyCode === this.keys.return) {
            this.posY += 10;
          }

        do {
            this.img.frameIndex;
            this.animateImg(this.framesCounter);
        } while (this.setListeners());

        }.bind(this);
    };

    // colisions () {

    // }

    // speed() {
    //     // Aumenta la velocidad en el eje y.
    //     var gravity = 0.4;
    
    //     // solo acelera cuando el personaje está en el suelo
    //     if (this.y >= this.y0) {
    //       this.vy = 1;
    //       this.y = this.y0;
    //     } else {
    //       this.vy += gravity;
    //       this.y += this.vy;
    //     }
    // }

}