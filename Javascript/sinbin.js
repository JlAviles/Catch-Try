class Sinbin {
    constructor (posX, posY, ctx, canvas) {
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.canvas=canvas;
        this.speed = Math.floor(Math.random()*10)+1;
        this.width = 100;
        this.height = 80;

        this.posX = Math.floor(Math.random()*(this.canvas.width - 10) + 0);
        this.posY = -5;

    };

    draw() {
        this.img = new Image();
        this.img.src = "./Images/sin_bin.png";

        this.ctx.drawImage(
            this.img,
            this.posX,
            this.posY,
            this.width,
            this.height
          );
    };

    move() {
        this.posY += this.speed;
        this.posX = this.posX;
    };

}