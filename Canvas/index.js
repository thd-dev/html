const canvas = document.querySelector('#canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




let ctx = canvas.getContext('2d')

// ctx.Rect(700, 500, 200, 100)


/* ----------------------

// House using Canvas starts here

// Line
ctx.beginPath();
ctx.moveTo(200, 400)

ctx.lineTo(400, 300)
ctx.lineTo(900, 300)
ctx.lineTo(700, 400)
ctx.lineTo(200, 400)
ctx.lineTo(200, 700)
ctx.lineTo(700, 700)
ctx.lineTo(700, 400)
ctx.lineTo(900, 300)
ctx.lineTo(1100, 400)
ctx.lineTo(1100, 700)
ctx.lineTo(700, 700)
ctx.lineTo(700, 400)
ctx.strokeStyle = 'green'
ctx.fillStyle = 'gray'
ctx.fill()
ctx.stroke()

// ctx.lineTo(400, 300)
// ctx.strokeStyle = 'green'
// ctx.stroke()


// ctx.lineTo(700, 300)
// ctx.strokeStyle = 'pink'
// ctx.stroke()

ctx.closePath();


// Rectangle
ctx.fillStyle = 'brown';
ctx.fillRect(430, 230, 40, 70);
ctx.strokeStyle = 'brown'
ctx.lineWidth = 1;
ctx.strokeRect(430, 230, 40, 70)

ctx.fillRect(850, 500, 100, 200);
ctx.strokeRect(850, 500, 100, 200)

ctx.fillStyle = 'rgba(203, 249, 250, 0.6)';
ctx.fillRect(350, 500, 200, 100);
ctx.lineWidth = 3;
ctx.strokeRect(350, 500, 200, 100)

// Circle
ctx.beginPath()
ctx.fillStyle = 'rgba(203, 249, 250, 0.7)';
ctx.arc(900, 400, 50, 0, Math.PI * 2, false)
ctx.lineWidth = 6;
ctx.fill()
ctx.stroke()

// ends here

---------------------- */

/*----------------
// Draw 200 circle of random color, random radius and at randow position

const setupfunction = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw()
}

const draw = () => {
  for (let i = 0; i < 200; i++) {
    let x = (Math.random() * canvas.width).toFixed(2)
    let y = (Math.random() * canvas.height).toFixed(2)
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let alpha = Math.random().toFixed(1)
    let radius = Math.floor(Math.random() * 80 + 10)

    ctx.beginPath()

    ctx.fillStyle = `rgba(${red}, ${blue}, ${green}, ${alpha})`;
    ctx.strokeStyle = `rgb(${red}, ${blue}, ${green})`;

    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.lineWidth = 2;
    ctx.fill()
    ctx.stroke()
  }
}
window.addEventListener('resize', setupfunction)
setupfunction()

------------------*/

/* --------------------

// Amimations

------------------- */

// let pi1 = Math.PI * 2
// let pi2 = Math.PI * 2

// const animate = () => {
//   requestAnimationFrame(animate);


//   ctx.clearRect(0, 0, innerWidth, innerHeight)

//   ctx.beginPath()
//   ctx.arc(100, 100, 50, 0, pi1, false)
//   ctx.lineWidth = 2
//   ctx.stroke()
//   ctx.beginPath()
//   ctx.arc(100, 100, 25, 0, pi2, false)
//   ctx.lineWidth = 2
//   ctx.fill()
//   ctx.stroke()

//   ctx.beginPath()
//   ctx.arc(300, 100, 50, 0, pi1, false)
//   ctx.lineWidth = 2
//   ctx.stroke()
//   ctx.beginPath()
//   ctx.arc(300, 100, 25, 0, pi2, false)
//   ctx.lineWidth = 2
//   ctx.fill()
//   ctx.stroke()

//   console.log(`p1: ${pi1}, p2: ${pi2}`)
//   if (pi1 === Math.PI * 2) {
//     pi1 = Math.PI;
//     pi2 = 0
//   } else {
//     pi1 = Math.PI * 2
//     pi2 = Math.PI * 2
//   }

// }

// animate()

class Data {
  constructor(x, y, radius, dx, dy, red, blue, green, alpha) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.alpha = alpha;
    this.draw = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false)
      ctx.strokeStyle = `rgb(${red}, ${blue}, ${green})`
      ctx.stroke()
      ctx.fillStyle = `rgba(${red}, ${blue}, ${green}, ${alpha})`
      ctx.fill()
    }
  }

  update() {

    if (this.x + this.radius > innerWidth | this.x - this.radius < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.radius > innerHeight | this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw()
  }

}



const circleArray = [];
for (let i = 0; i < 100; i++) {
  let radius = 25
  let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
  console.log(x);
  let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
  let dx = Math.random() * 10 + 1;
  let dy = Math.random() * 10 + 1;
  let red = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let alpha = Math.random().toFixed(1)
  circleArray.push(new Data(x, y, radius, dx, dy, red, blue, green, alpha))
}


const animate = () => {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.clearRect()
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate()