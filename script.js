const canvas = document.querySelector("#canvas")
const brushSizes = document.querySelector(".brush-size")
const clearBtn = document.querySelector(".clear-btn")
const colorPicker = document.querySelector(".color-picker")

const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();
canvas.width = 900
canvas.height = 700
let isDrawing = false
let brushColor = "#000"
let selectedBrushSize = 5

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return

  let x = e.clientX - rect.left
  let y = e.clientY - rect.top

  ctx.beginPath();
  ctx.arc(x, y, selectedBrushSize, 0, 2 * Math.PI);
  ctx.fillStyle = brushColor
  ctx.fill();
})

canvas.addEventListener("mousedown", () => isDrawing = true)
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)

brushSizes.addEventListener("input", (e) => {
  selectedBrushSize = e.target.value
})

colorPicker.addEventListener("input", e => {
  const color = e.target.value
  brushColor = color
})

clearBtn.addEventListener("click", () => ctx.clearRect(0 ,0, canvas.width, canvas.height))


// Todo
// Save as image
// Add pressure sentitivity (Not required)

// To Fix
// Circle gaps