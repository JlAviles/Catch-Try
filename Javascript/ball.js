class Ball {
    constructor(posX, posY, ctx, canvas) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = 70;
        this.height = 50;
        this.speed = Math.floor(Math.random()*10)+1;
        this.scoreBoard = 500;
        // this.canvasWidth = canvasWidth.width;

        this.img = new Image();
        this.img.src = "./Images/Ball.png";   

        this.vx = 1;   

        this.posX = Math.floor(Math.random()*(((canvas.width - 150) - 150)) + 150);
        this.posY = -20;

        this.img.frames = 4;
        this.img.frameIndex = 0;    

        this.characterFrameW = 0;
        this.framesCounter = 1; 
    };

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
        
        if (this.img.frameIndex > 3) this.img.frameIndex = 0;
        }
    };

    move() {
        this.posY += this.speed;
        this.posX = this.posX;
    };

}
