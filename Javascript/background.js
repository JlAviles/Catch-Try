class Background {
    constructor(w, h, ctx) {
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = "./Images/field.png";
      this.h = 925;
      this.w = 832;
      this.x = 0;
      this.y = 0;
  
      this.dy = 5;
    }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y - this.h,
      this.w,
      this.h
    );
  }
  
    move() {
      this.y += this.dy;

      if (this.y > this.h) this.y = 0;
  };
}