let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


let isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
        console.log("begin")
        isDrawing = true;
        ctx.beginPath(); // Start a new path
        ctx.moveTo(e.offsetX, e.offsetY); // Move to the starting point
    });

    canvas.addEventListener('mouseup', () => {
        console.log("stop")
        isDrawing = false;
    });

    canvas.addEventListener('mousemove', (e) => {
        console.log("make line")
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
            ctx.stroke(); // Stroke the line
            ctx.beginPath(); // Start a new path
            ctx.moveTo(e.offsetX, e.offsetY); // Move to the current mouse position
        }
    });