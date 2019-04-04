class Time {
    constructor (ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;   

        this.counterTime = 45;
    };

    clock() {
        this.ctx.beginPath();
        this.ctx.font = "120px Arial";
        this.ctx.fillText("00:45", 850, 100);
        this.ctx.fillStyle = "#008dd4";
        this.ctx.textAlign = "right";
        this.ctx.stroke();
    };
}