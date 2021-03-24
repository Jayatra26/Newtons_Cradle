class Bob {
    constructor(x,y,r) {
var options ={
   isStatic:false,
   friction:0.4,
   density:3,
  restitution:1.2,
}
   this.x = x;
   this.y = y;
   this.r = r; 
   this.body = Bodies.circle(this.x,this.y,this.r/2 ,options)
}
}
   