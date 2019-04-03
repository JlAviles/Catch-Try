class Adversary {
    constructor (posX, posY, ctx, canvas){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas=canvas;
        //this.speed = speed;
        this.width = 80;
        this.height = 60;

        this.posX = Math.floor(Math.random()*(this.canvas.width - 0 + 1) + 0);
        this.posY = 0;

        this.vx = 1;

        this.img = new Image();
        this.img.src = "./Images/Adversario.png";

        // this.img = new Image();
        // this.img.src = "";

        // this.img = new Image();
        // this.img.src = "";

        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.framesCounter = 0;
    }

    draw(framesCounter, img) {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames), 
            0, 
            Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.posX,
            this.posY - 5,
            this.width,
            this.height
          );
          this.animateImg(framesCounter);
    };

    animateImg(framesCounter, img) {
        if (framesCounter % 1 === 0) {
          this.img.frameIndex++;
        
          if (this.img.frameIndex > 2) this.img.frameIndex = 0;
        }
    };

    move() {
        this.posY += 2;
        this.posX = this.posX;
    };

}


// class invencibleRival extends Adversary {

// };

// class sinBin extends Adversary {

// };

