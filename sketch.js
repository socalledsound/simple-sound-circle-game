const socket = io.connect();
let env, osc;
socket.on('connect', () => {
    console.log('client connected')
})

let myCircle;

function setup(){
    createCanvas(600, 600);
    
    env = new p5.Envelope(0.01, 0.7, 0.3, 0.0);
    osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0);


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
