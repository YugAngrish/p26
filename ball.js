
class rBall{

constructor(x,y,width,height){
    var objectProperty = {
        isStatic:false,
        friction : 0.9, 
        density: 1 ,
        restitution : 1
      }
    this.object = Bodies.rectangle(x,y,width,height,objectProperty);
    World.add(world,this.object);
    this.width = width;
    this.height = height;
    this.image = loadImage("crumbled paper.png")

   
}

display(){

    
    var pos = this.object.position;
    var angle = this.object.angle

    //imageMode(CENTER);
   // image(this.image,0,0,this.width,this.height)
    push();

    translate(pos.x,pos.y);
    
    fill("red")
    rotate(angle)
    rectMode(CENTER);
   image(this.image,0,0,this.width,this.height)
    pop();
    
}
}