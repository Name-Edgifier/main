const inputBar = document.getElementById("inputBar");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("resultText");

let emojiArray = ["🖤","🦇","🥀","⛓","✮","♱","⋆"];

function edgifyText(str) {
    let returnSTR = `xX${str}Xx `;
    for(let i = 0; i < 5; i++) {
        const emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        returnSTR += emoji;
    }
    return returnSTR;
}

submitBtn.addEventListener('click', function() {
    result.textContent = edgifyText(inputBar.value);
})