class Adversary {
    constructor (width, height, posX, posY, ctx, canvas){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas=canvas;
        //this.speed = speed;
        this.width = 80;
        this.height = 60;


        this.posX = Math.floor(Math.random()) <= this.canvas.width;
        this.posY = 0;

        this.vx = 1;
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

}


class invencibleRival extends Adversary {

};

class sinBin extends Adversary {

};

