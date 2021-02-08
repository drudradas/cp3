class paper
{
    constructor(x,y,w,h) {
        var options = {
            restitution:0.8,
            friction:1
           
        }
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("paper.png")// paper.png is not inside any folder. So just write this.image= loadImage("paper.png")
        
        World.add(world, this.body);
      }
      
      
      display(){
        var pos =this.body.position;
      //   console.log(pos)

        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)

        pop();
      }







}









