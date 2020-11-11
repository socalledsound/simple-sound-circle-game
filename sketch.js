const socket = io.connect();

socket.on('connect', () => {
    console.log('client connected')
})


let env, osc;
let myCircle;




function setup(){
    createCanvas(600, 600);
    
    env = new p5.Envelope(0.01, 0.7, 0.3, 0.0);
    osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0);


    const myCircleOpts = {
        x: random(50, width-50),
        y: random(50, height-50),
        size: random(20,40),
        col: [random(255), random(255), random(255)],
    }


    myCircle = new SoundCircle(socket.id, myCircleOpts.x, myCircleOpts.y, myCircleOpts.size, myCircleOpts.col);
}

function draw(){
    background(120,90,200);


    myCircle.move();
    myCircle.checkEdges();
    myCircle.display();
}


function mousePressed(){
    const playSound = myCircle.checkClick(mouseX, mouseY);
    if(playSound){
        const freq = myCircle.size * 10;
        playSound(freq);
    }
}

function mouseReleased(){
    myCircle.clicked = false;
    myCircle.setSpeed(mouseX, mouseY);
}

function playSound(freq){
    osc.freq(freq);
    env.play(osc);
}
