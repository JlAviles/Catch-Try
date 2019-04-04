class Time {
    constructor (ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;   

        this.counterTime = 45;
    };

    clock() {
        this.ctx.beginPath();
        this.ctx.font = "120px Arial";
        this.ctx.fillText("00:45", 700, 100);
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "right";
        this.ctx.stroke();
    };
}