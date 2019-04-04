class Adversary {
    constructor (src, width, height, posX, posY, ctx, canvasWidth){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
       // this.canvas = canvas;
        this.speed = Math.floor(Math.random()*10)+1;
        this.width = width;
        this.height = height;
        // this.gravity = 0.05;
        // this.gravitySpeed = 0;
        // this.canvasWidth = canvasWidth.width;
        this.posX = Math.floor(Math.random()*(((canvas.width-150) - 150)) + 150);
        this.posY = -20;

        this.vx = 1;

        this.imageRival = new Image();
        this.imageRival.src = src;

        this.imageRival.frames = 3;
        this.imageRival.frameIndex = 0;
        this.framesCounter = 0;

        this.imageInvencible = new Image();
        this.imageInvencible.src = src;

        this.imageInvencible.frames = 3;
        this.imageInvencible.frameIndex = 0;
        this.framesCounter = 0;
    };

    draw(framesCounter) {
        this.ctx.drawImage(
            this.imageRival,
            this.imageRival.frameIndex * Math.floor(this.imageRival.width / this.imageRival.frames), 
            0, 
            Math.floor(this.imageRival.width / this.imageRival.frames),
            this.imageRival.height,
            this.posX,
            this.posY - 5,
            this.width,
            this.height
          );
          this.animateImg(framesCounter);
    };

    animateImg(framesCounter) {
        if (framesCounter % 10 === 0) {
         this.imageRival.frameIndex++;
         this.imageInvencible.frameIndex++;
        
          if (this.imageRival.frameIndex > 2) this.imageRival.frameIndex = 0;
        }
    };

    move() {
        this.posY += this.speed;
        this.posX = this.posX;
    };
}
