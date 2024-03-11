let generateBtn = document.querySelector("#generateBtn");





generateBtn.addEventListener("click", function () {
    let colorBox = document.querySelector("#color-box");
    let colorText = document.querySelector("#color-text");

    let randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
});


function generateRandomColor() {
    let letter = "0123456789ABCDEF";
    let color = "#";



    for (i = 0; i < 6; i++) {
        color = color + letter[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;

}