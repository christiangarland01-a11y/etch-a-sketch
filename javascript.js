const container = document.querySelector("#container");
const colorBtn = document.querySelector("#color");
const greyBtn = document.querySelector("#grey");

const containerWidth = 960;
let isColorful = true;
let isDarker = false;

function createGrid(row) {
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row; j++) {
            const div = document.createElement("div");
            div.setAttribute("id", `row${i}col${j}`);
            div.style.width = `${containerWidth / row}px`;
            div.style.height = `${containerWidth / row}px`;
            div.style.backgroundColor = "white";
            div.classList.toggle("grid");
            container.appendChild(div);
        }
    }
    
    const wholeGrid = document.querySelectorAll("#container>div");
    wholeGrid.forEach(square => {
        square.addEventListener("mouseover", e => {
            e.preventDefault();
            if(isColorful) {
                changeColor(e.target);
            } else if(isDarker) {
                changeTransparency(e.target);
            }
        })
    }) 
}

function changeColor(div) {
    let hexCode = "#";
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 1; i <= 6; i++) {
        let code = Math.floor(Math.random() * 17);
        hexCode += `${hexArr[code]}`
    };
    div.style.backgroundColor = hexCode;
}

function changeTransparency(div) {
    if(!div.style.opacity){
        div.style.opacity = 0;
        div.style.backgroundColor = "black";
    } else {
        div.style.opacity = parseFloat(div.style.opacity) + .1;
    }
};

window.addEventListener("load", () => createGrid(16));

colorBtn.addEventListener("click", () => {
    isColorful = true;
    isDarker = false;
    container.innerHTML = "";
    createGrid(parseInt(window.prompt("How big do you want the grid", 16)));
})

greyBtn.addEventListener("click", () => {
    isColorful = false;
    isDarker = true;
    container.innerHTML = "";
    createGrid(parseInt(window.prompt("How big do you want the grid", 16)));
})