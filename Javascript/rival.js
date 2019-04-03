class Rival extends Adversary {
    constructor (src,posX, posY, ctx, canvas) {
        super (src,posX, posY, ctx, canvas);
        this.gravity = 0.05;
        this.gravitySpeed = 0;
    };
};