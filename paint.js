let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let penButton = document.getElementById('pen-button')
let paintButton = document.getElementById('paint-button')
let thicknessButtons = document.getElementsByName("line-size")
let lineColorInput = document.getElementsByName('line-color')[0]
console.log(lineColorInput)
console.log(thicknessButtons)
console.log(ctx)
canvas.width = 800
canvas.height = 600
// ctx.lineWidth = 5
// ctx.fillStyle = "rgb(255 0 0)"
let prevMouseX
let prevMouseY




let isDrawing = false;
// Event Listener to Start Drawing
    canvas.addEventListener('mousedown', (e) => {
        console.log(e)
        console.log("begin")
        isDrawing = true;
        prevMouseX = e.offsetX 
        prevMouseY = e.offsetY 
        ctx.beginPath(); // Start a new path
        ctx.moveTo(prevMouseX , prevMouseY ); // Move to the starting point
    });
// Event Listener to Stop Drawing
    canvas.addEventListener('mouseup', () => {
        console.log("stop")
        isDrawing = false;
    });
// Event Listener to Make the Line
    canvas.addEventListener('mousemove', (e) => {
        
        if (isDrawing) {
            console.log(ctx.lineWidth)
            ctx.beginPath(); // Start a new path
            ctx.moveTo(prevMouseX , prevMouseY); // Move to the current mouse position
            ctx.lineTo(e.offsetX , e.offsetY); // Draw a line to the current mouse position
            ctx.stroke(); // Stroke the line
            prevMouseX = e.offsetX //Set the coordinates for the next position to draw the line
            prevMouseY = e.offsetY //Set the coordinates for the next position to draw the line
            
        }
    });

    paintButton.addEventListener('click', (e) => {
        canvas.className = "paint"
    })

    penButton.addEventListener('click', (e) => {
        canvas.className = "pen"
    })
// Event Listener to Recognize Line Thickness Choice

    thicknessButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.value === "thin"){
                ctx.lineWidth = 1
            }else if (e.target.value === "medium"){
                ctx.lineWidth = 5
            }else if (e.target.value === "thick"){
                ctx.lineWidth = 10
            }
        })
    })

    lineColorInput.addEventListener("change", (e) => {
        console.log(lineColorInput.value)
        ctx.strokeStyle = `${lineColorInput.value}`
    })