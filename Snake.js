class Snake{
    constructor(x, y, width, height){

        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.body = [];
        
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
          noStroke();
          rect(this.body[i].x, this.body[i].y, 1, 1)
    }
}

    grow(){
        this.length = this.length + 10
    }

    turnLeft(){
        this.body.velocity.x = -2;
    }
    turnRight(){
        this.body.velocity.x = 2;
    }
    turnUp(){
        this.body.velocity.y = -2;
    }
    turnDown(){
        this.body.velocity.y = 2;
    }
    }