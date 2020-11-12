// const socket = io.connect();

// socket.on('connect', () => {
//     console.log('client connected')
// })


let env, osc;
let myCircle;




function setup(){
    createCanvas(600, 600);
    
    env = new p5.Envelope(0.01, 0.7, 0.3, 0.0);
    osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0);


    // const myCircleOpts = {
    //     x: random(150, width-150),
    //     y: random(150, height-150),
    //     size: random(20,40),
    //     col: [random(255), random(255), random(255)],
    // }

    const myCircleOpts = {
        x: 100,
        y: random(150, height-150),
        size: random(20,40),
        col: [random(255), random(255), random(255)],
    }


    myCircle = new SoundCircle(1, myCircleOpts.x, myCircleOpts.y, myCircleOpts.size, myCircleOpts.col);
}

function draw(){
    background(120,90,200);


    myCircle.move();
    myCircle.checkEdges();
    myCircle.display();
}

const playSound = (freq) => {
    console.log('playing sound');

}

function mousePressed(){
    const playSound = myCircle.checkClick(mouseX, mouseY);
    if(playSound){
        console.log(playSound);
        const freq = myCircle.size * 10;
        osc.freq(freq);
        env.play(osc);
    }
}

function mouseReleased(){
    if(myCircle.clicked){
        myCircle.setSpeed(mouseX, mouseY);
    }  
    myCircle.clicked = false;
}


