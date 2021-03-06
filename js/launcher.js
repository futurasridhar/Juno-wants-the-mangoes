class Launcher {

    constructor (bodyX, pointY){
    
      
        var options = {
            bodyA :bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 10
          }
       
          this.body = Constraint.create (options);
          World.add (world, this.body);
    
    }
    
    display(){
    
        if(this.body.bodyA){
             var pointA = this.body.bodyA.position;
             var pointB = this.body.pointB;    
    
             push ();
             stroke ("black");
             strokeWeight (3);
             line (pointA.x,pointA.y,pointB.x, pointB.y); 
             pop();

        }
    
    }



    fly (){
        this.body.bodyA = null ;
    }

    attach (body){
        this.body.bodyA = body ;
    }

}
