let canvas = document.getElementById('confetti');
canvas.width = 1000;
canvas.height = 500;
let context = canvas.getContext('2d');
let pieces = [];
let = amountpieces = 100;

function actuPieces(x, y){
    this.y = y;
    this.x = x;
    this.color = color;
    this.size = 15;
    this.rotation = (math.PI * 2) ;
    this.rotationSpeed = (math.PI * 2);
    this.gravity = 15 + .01;
}
while(pieces.length < numberOfPieces){
    pieces.push(new actualPiece(Math.random()* canvas.width, Math.random() * canvas.height));
}
function update(){
    setTimeout(update, 1);
}

function color(){
    let listCols = [];
    return listCols[math.floor(Math.random() * listCols.length)]
}
function draw() {

    pieces.forEach(function(thing){
        context.save();
        context.translate()
    )};
    requestAnimationFrame(draw);
    }
update();
draw();