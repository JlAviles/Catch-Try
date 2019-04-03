class rival extends Adversary {
    constructor (widht, height, posX, posY, ctx, canvas) {
        super (posX, posY, ctx, canvas);

        this.img = new Image();
        
        this.img.src = "./Images/Adversario.png";

        this.img.frames = 3;
        this.img.frameIndex = 0;

        this.framesCounter = 0;
    }

    move() {
        this.posY += 10 
    }

};