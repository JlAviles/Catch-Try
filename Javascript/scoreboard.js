class Scoreboard {
    constructor (posX, posY, ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;   

        this.score = 820;
    };

    rect() {
        this.ctx.beginPath();
        this.ctx.rect(5,850,820,50);
        this.ctx.lineWidth = "5";
        this.ctx.stroke();
    };

    draw() {
        this.ctx.beginPath();
        this.ctx.fillRect(10,850,this.score,50);
        this.ctx.fillStyle = "#1a8ec4";
        this.ctx.stroke();
    };
}