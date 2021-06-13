class Player1{
    constructor(x,y,w,h){
        var option={
            isStatic:true
            //restitution:0.08
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        this.image=loadImage("player.gif")
        World.add(myworld,this.body)
    }
    display(){
        var pos =this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,200,350)
        pop()
    }
    
}