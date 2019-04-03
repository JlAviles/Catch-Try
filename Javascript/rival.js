class Rival extends Adversary {
    constructor (src,width, height,posX, posY, ctx, canvas) {
        super (src,width, height,posX, posY, ctx, canvas);
        this.width = 80;
        this.height = 60;
        this.gravity = 0.05;
        this.gravitySpeed = 0;
    };
};