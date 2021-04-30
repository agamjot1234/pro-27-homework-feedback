class Rope{

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB :body2,
            pointB:{x: this.offsetX,y:this.offsetY}

        }
        this.rope= Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        var archer1X = point1.x;
        var archer1Y = point1.y;

        var archer2X = point2.x + this.offsetX;
        var archer2Y= point2.y +this.offsetY;

        line(archer1X,archer1Y,archer2X,archer2Y);
    }
}