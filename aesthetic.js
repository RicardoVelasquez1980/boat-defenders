//Ricardo Velasquez
//Boat Defender

//Start Class Ocean##########
class Ocean extends p5.Vector{
  constructor(){
    super(0, height - 85);//Location#####
    this.w = width;//Width#####
    this.h = height - (height - 85);//Height#####
  }

  run(){
    this.render();
  }

  render(){
    push();
    noStroke();
    fill(10, 112, 163);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
//End Class Ocean##########

//Start Class Clouds##########
class Clouds extends p5.Vector{
  constructor(x, y, r){
    super(x, y);//Loaction#####
    this.vel = createVector(0.5, 0);//Velocity#####
    this.rad = r;//Radius of Cloud#####
    this.outOfBounds = false;//Not Out Of Bounds#####
  }

  run(){
    this.render();
    this.move();
    this.checkOutOfBounds();
  }

  render(){
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.rad);
    pop();
  }

  move(){
    this.add(this.vel);
  }

  checkOutOfBounds(){
    if (this.x - this.rad > width){
      this.outOfBounds = true;
    }
  }
}
//End Class Clouds##########

//Start Class Island##########
class Island extends p5.Vector{
  constructor(){
    super(random(width), random(height * 0.75, height - 85));//REPLACE X AND Y WITH RANDOMIZATION%%%%%%%%%%%%%%%%%%%
    this.size = 'N/A';
    this.sizeChoices = ['SMALL', 'MED', 'LARGE'];
    this.sizeSelection();
  }

  run(){
    this.render();
  }

  render(){
    if (this.size === 'SMALL'){
      push();
      fill(247, 213, 134);
      noStroke();
      translate(this.x, this.y);
      arc(0, 0, 80, 70, PI, TWO_PI);
      pop();
    } else if (this.size === 'MED'){
      this.size = 'SMALL';
    } else if (this.size === 'LARGE'){
      this.size = 'SMALL';
    }
  }

  sizeSelection(){
    let x = floor(random(3));
    this.size = this.sizeChoices[x];
  }
}
//End Class Island##########
