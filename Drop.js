class Drop{
    
    constructor(){
        this.x = random(width);
        this.y = random(500,0);
        this.z = random(0,20);
        this.len = random(10,20);

    }
    fall(){
        this.y = this.y + 15;
        if(this.y>height){
            this.y = 0;
        }
    }
    display(){
        stroke(130,42,200)
        strokeWeight(3);
        line(this.x,this.y,this.x,this.y + this.len)
    }
    
}