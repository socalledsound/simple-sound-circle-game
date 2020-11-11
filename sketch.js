let myCircle;

function setup(){
    createCanvas(600, 600);
    myCircle = new SoundCircle(width/2, height/2);
}

function draw(){
    background(120,90,200);
    myCircle.move();
    myCircle.checkEdges();
    myCircle.display();
}


function mousePressed(){
    myCircle.checkClick(mouseX, mouseY);
}

function mouseReleased(){
    myCircle.clicked = false;
    myCircle.setSpeed(mouseX, mouseY);
}
