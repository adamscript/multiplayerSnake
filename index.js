const BG_COLOUR = '231f20';
const SNAKE_COLOUR = '#C2C2C2';
const FOOD_COLOUR = 'E66916'
const gameScreen = document.getElementById('gameScreen');

let canvas, ctx;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 600;

    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.addEventListener('keydown', keydown);
}

function keydown(e){
    console.log(e.keyCode);
}

init();