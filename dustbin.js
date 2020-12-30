class Dustbin{

    constructor(x,y,width,height){
        var objectProperty = {
            isStatic:true,
            friction : 0.3, 
            density: 1
          }
        this.object = Bodies.rectangle(x,y,width,height,objectProperty);
        World.add(world,this.object);
        this.width = width;
        this.height = height;
    
    
       
    }
    
    display(){
    
        this.object.debug = true;
        var pos = this.object.position;
        push();
       
        translate(pos.x,pos.y);
        
        fill("red")
        rectMode(CENTER);
       // rect(0,0,this.width,this.height)
        pop();

        /*push();
    
        translate(pos.x,pos.y);
        
        fill("red")
        imageMode(CENTER);
       image(this.image,40,40,)
        pop();*/
        
        
    }
    }