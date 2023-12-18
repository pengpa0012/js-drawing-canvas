const canvas = document.querySelector("#canvas")

const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();
canvas.width = 900
canvas.height = 700
let drawSize = 10

canvas.addEventListener("click", e => {
  let x = e.clientX - rect.left
  let y = e.clientY - rect.top

  ctx.beginPath();
  ctx.arc(x, y, drawSize, 0, 2 * Math.PI);
  ctx.fill();

})


// Todo
// continuous dot on mouse down or something
// resizing of brushes
// Colors
// Save as image
// Add pressure sentitivity (Not required)