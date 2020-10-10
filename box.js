class Box{
constructor(x,y){

   var options = {

        isStatic: true


    }

    this.width = 200
    this.height = 100
    this.thickness = 20
    



    this.bottomRect=Bodies.rectangle(x,y,this.width,this.thickness,options);
World.add(world,this.bottomRect);

this.leftRect=Bodies.rectangle(x-100,y-50,this.thickness,this.height,options);
World.add(world,this.leftRect);

this.rightRect=Bodies.rectangle(x+100,y-50,this.thickness,this.height,options);
World.add(world,this.rightRect);






}
display(){

var bp = this.bottomRect
var lp = this.leftRect
var rp = this.rightRect

var pos1 = bp.position
var pos2 = lp.position
var pos3 = rp.position

push()
translate(pos1.x , pos1.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,this.width,this.thickness);

pop()

push()
translate(pos2.x , pos2.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,this.thickness,this.height);

pop()

push()
translate(pos3.x , pos3.y);
fill(225,0,0)
rectMode(CENTER);
rect(0,0,this.thickness,this.height);

pop()

}





}