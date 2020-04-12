class Food{
    constructor(){

        this.body = Bodies.rectangle(Math.round(random(10, 790)), Math.round(random(10, 790)), 20, 20);

        this.x = Math.round(random(10, 790));
        this.y = Math.round(random(10, 790));

        this.width = 20;
        this.height = 20;

        World.add(world, this.body);

    }

    display(){

        rect(this.x, this.y, this.width, this.height);
    }

    isTouching(body){
        if(this.body.x - body.x < this.body.width/2 + body.width/2 && 
            body.x - this.body.x < this.body.width/2 + body.width/2 &&
            this.body.y - body.y < this.body.height/2 + body.height/2 &&
            body.y - this.body.y < this.body.height/2 + body.height/2 ){

                this.body.positon.x = Math.round(random(10, 700));
                this.body.positon.y = Math.round(random(10, 700));

            body.length = body.length + 10;

        }
    }
}