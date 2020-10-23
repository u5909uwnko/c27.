class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        stroke("Orange");
        

        var Aditya1X = pointA.x;
        var Aditya1Y = pointA.y;

        var Aditya2X = pointB.x+this.offsetX;
        var Aditya2Y = pointB.y+this.offsetY;

        line(Aditya1X, Aditya1Y, Aditya2X, Aditya2Y);
    }
}