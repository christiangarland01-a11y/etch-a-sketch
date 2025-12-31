const container = document.querySelector("#container");
const containerWidth = 960;

function createGrid(row) {
    let totalSquares = row*row;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row; j++) {
            const div = document.createElement("div");
            div.setAttribute("id", `row${i}col${j}`);
            div.style.width = `${containerWidth / row}px`;
            div.style.height = `${containerWidth / row}px`;
            div.classList.toggle("grid");
            container.appendChild(div);
        }
    }
}

createGrid(16);