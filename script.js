const canvas = document.querySelector("#canvas")
const brushSizes = document.querySelectorAll(".brush-size")
const clearBtn = document.querySelector(".clear-btn")

const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();
canvas.width = 900
canvas.height = 700
let isDrawing = false

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return
  const selectedBrushSize = document.querySelector(".selected").attributes["data-size"].value

  let x = e.clientX - rect.left
  let y = e.clientY - rect.top

  ctx.beginPath();
  ctx.arc(x, y, selectedBrushSize, 0, 2 * Math.PI);
  ctx.fill();
})

canvas.addEventListener("mousedown", () => isDrawing = true)
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)

brushSizes.forEach(size => {
  size.addEventListener("click", () => {
    brushSizes.forEach(el => el.classList.remove("selected"))
    size.classList.add("selected")
  })
})

clearBtn.addEventListener("click", () => ctx.clearRect(0 ,0, canvas.width, canvas.height))


// Todo
// resizing of brushes
// Colors
// Save as image
// Add pressure sentitivity (Not required)