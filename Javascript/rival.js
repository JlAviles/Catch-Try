class Rival extends Adversary {
    constructor (src,width, height,posX, posY, ctx, canvas) {
        super (src,width, height,posX, posY, ctx, canvas);
        this.width = 70;
        this.height = 50;
        this.gravity = 2;
        this.gravitySpeed = 1;
    };
};