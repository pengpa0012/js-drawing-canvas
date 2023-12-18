const canvas = document.querySelector("#canvas")

const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();
canvas.width = 900
canvas.height = 700
let drawSize = 10
let isDrawing = false

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return
  console.log(e.clientX - rect.left,e.clientY - rect.top)

  let x = e.clientX - rect.left
  let y = e.clientY - rect.top

  ctx.beginPath();
  ctx.arc(x, y, drawSize, 0, 2 * Math.PI);
  ctx.fill();
})

canvas.addEventListener("mousedown", () => isDrawing = true)
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)

// Todo
// resizing of brushes
// Colors
// Save as image
// Add pressure sentitivity (Not required)