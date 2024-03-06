const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

console.log(ctx);

const scale = 20;
const rows = canvas.height/ scale;//25 rows
const cols = canvas.width/scale;// 25 col

let score = 0;



let snake = [];
snake[0] = {
  x: Math.floor(Math.random() * cols) * scale,
  y: Math.floor(Math.random() * rows) * scale,
};

ctx.fillStyle = "#fff";
ctx.strokeStyle = "black";
ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
ctx.strokeRect(snake[0].x, snake[0].y, scale, scale);




    let food= {
        x: (Math.floor(Math.random() * cols)) * scale,
        y: (Math.floor(Math.random() * rows)) * scale
    }


let playGame = setInterval(draw, 100);