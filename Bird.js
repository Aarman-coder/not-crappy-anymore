class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.plume_plume = loadImage("sprites/smoke.png");
    this.relevant_something = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display()
    if(this.body.velocity.x > 7 && this.body.position.x > 200){
      var something_not_relevant = [this.body.position.x,this.body.position.y]
      this.relevant_something.push(something_not_relevant);
    }
    
    for(var i = 0; i < this.relevant_something.length; i++) {
      image(this.plume_plume,this.relevant_something[i][0],this.relevant_something[i][1])

    }
  }
}
