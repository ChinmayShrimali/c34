class Ball{
    constructor(x,y,width,height,angle){

        var options={
            
            frictionAir:0.005,
            density:1
        }
        this.body=Bodies.circle(x,y,80,options)
        this.radius=80
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)    
        fill("green")
        ellipse(0,0,this.width,this.height)
        pop();
    }
}
