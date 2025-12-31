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

function getRandomColor() {
    let hexCode = "#";
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    for (let i = 1; i <= 6; i++) {
        let code = Math.floor(Math.random() * 17);
        hexCode += `${hexArr[code]}`;
    };
    return hexCode;
}



createGrid(20);