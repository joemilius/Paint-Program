let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
console.log(ctx)
canvas.width = 800
canvas.height = 600
// ctx.lineWidth = 5
// ctx.fillStyle = "rgb(255 0 0)"
let prevMouseX
let prevMouseY




let isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
        console.log(e)
        console.log("begin")
        isDrawing = true;
        prevMouseX = e.offsetX 
        prevMouseY = e.offsetY 
        ctx.beginPath(); // Start a new path
        ctx.moveTo(prevMouseX , prevMouseY ); // Move to the starting point
    });

    canvas.addEventListener('mouseup', () => {
        console.log("stop")
        isDrawing = false;
    });

    canvas.addEventListener('mousemove', (e) => {
        
        if (isDrawing) {
            console.log("make line")
            ctx.beginPath(); // Start a new path
            ctx.moveTo(prevMouseX , prevMouseY); // Move to the current mouse position
            ctx.lineTo(e.offsetX , e.offsetY); // Draw a line to the current mouse position
            ctx.stroke(); // Stroke the line
            prevMouseX = e.offsetX 
            prevMouseY = e.offsetY 
            
        }
    });