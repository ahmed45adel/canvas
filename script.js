let button = document.querySelector("#add");
let x = 0;
let canvases = [];
button.addEventListener('click', () => {
    let newCanvas = document.querySelector("#canvas");
    let theNewContext = newCanvas.getContext('2d');
    let newColor = document.querySelector("#color").value;
    let height = document.querySelector("#number").value;
    if (height < 190 && height > 0) {
        canvases.push(newCanvas);
        canvases.map(() => {
            x = x + 60;
            theNewContext.fillStyle = `${newColor}`;
            theNewContext.fillRect(x, height, 50, 200 - height)
        })
        canvases = [];
    }
    else alert("height between 190 and 0");
})