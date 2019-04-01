class Character{
    constructor(w, h, ctx) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = ctx;
        this.keys = keys;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 100;

        this.img = new Image();
        this.img.src = "./Images/Rugbier.png";
    
        // guardar posición original (suelo)
        this.y = this.canvas.height - 100;
    
        // número de imágenes diferentes
        this.img.frames = 3;
        this.img.frameIndex = 0;
    
        // medidas de la imagen a representar en el canvas
        this.w = 281;
        this.h = 247;
    
        this.vy = 1;

        // this.setListeners();

        this.characterFrameW = 150;

    }
    
    draw() {
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * Math.floor(this.img.width / this.img.frames), 
            0, Math.floor(this.img.width / this.img.frames),
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
          );

          console.log(this.img);
      
          this.animateImg(framesCounter);
    }

    move() {window.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                sense = -1
                posX -= characterFrameW
                if (--frame < 0) frame = 2
                break;
            case 39:
                sense = 1
                posX += characterFrameW
                if (++frame > 2) frame = 0
                break;
            case 38:
                bullet = new Bullet(posX + characterFrameW, 250)
                bullet.shoot()
                break;
            }
        }
    }

    // setListeners() {
    //     document.onkeydown = function(event) {
    //       if (event.keyCode === this.keys.right && this.x == this.y0) {
    //         this.x -= 5;
    //         this.vx -= 10;
    //       } else if (event.keyCode == this.keys.SPACE) {
    //         this.shoot();
    //       }
    //     }.bind(this);
    //   }

    // moreSpeed() {
    //     // Aumenta la velocidad en el eje y.
    //     var gravity = 0.4;
    
    //     // solo acelera cuando el personaje está en el suelo
    //     if (this.y >= this.y0) {
    //       this.vy = 1;
    //       this.y = this.y0;
    //     } else {
    //       this.vy += gravity;
    //       this.y += this.vy;
    //     }
    //   }

    // colisions () {

    // }

}