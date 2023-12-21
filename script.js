const canvas = document.querySelector("#canvas")
const brushSizes = document.querySelector(".brush-size")
const clearBtn = document.querySelector(".clear-btn")
const saveBtn = document.querySelector(".save-btn")
const colorPicker = document.querySelector(".color-picker")

const ctx = canvas.getContext("2d")
const rect = canvas.getBoundingClientRect();
canvas.width = 900
canvas.height = 700
let isDrawing = false
let brushColor = "#000"
let selectedBrushSize = 5

function getPosition(e) {
  if (e.touches && e.touches.length > 0) {
    return {
      x: e.touches[0].pageX - rect.left,
      y: e.touches[0].pageY - rect.top
    };
  } else {
    return {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
  }
}

function draw(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, selectedBrushSize, 0, 2 * Math.PI);
  ctx.fillStyle = brushColor;
  ctx.fill();
}

function onMouseMove(e) {
  if (!isDrawing) return;
  let pos = getPosition(e);
  draw(pos.x, pos.y);
}

function onMouseDown(e) {
  isDrawing = true;
  let pos = getPosition(e);
  draw(pos.x, pos.y);
}

function onMouseUp() {
  isDrawing = false;
}

function onMouseOut() {
  isDrawing = false;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("touchmove", onMouseMove);

canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("touchstart", onMouseDown);

canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("touchend", onMouseUp);

canvas.addEventListener("mouseout", onMouseOut);
canvas.addEventListener("touchcancel", onMouseOut);

brushSizes.addEventListener("input", (e) => {
  selectedBrushSize = e.target.value
})

colorPicker.addEventListener("input", e => {
  const color = e.target.value
  brushColor = color
})

clearBtn.addEventListener("click", () => ctx.clearRect(0 ,0, canvas.width, canvas.height))

saveBtn.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png")
  const link = document.createElement("a")
  link.href = dataURL;
  link.download = "canvas_image.png"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
})


// Todo
// Add pressure sentitivity (Not required)

// To Fix
// Circle gaps