// Green Square
const squareGreenHide = document.querySelector("#squareGreenHide");
const squareGreenButton = document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton);

squareGreenButton.addEventListener("click", function() { 
    console.log(squareGreenHide);
    console.log("Knapp trykket på");
    squareGreenHide.classList.toggle("hidden");
});

// Red Square
const squareRedShowText = document.querySelector("#squareRedShowText");
const squareRedButton = document.querySelector("#squareRedButton");

console.log(squareRedShowText, squareRedButton);

const squareRedText = document.createElement("p");
console.log(squareRedText);
squareRedText.textContent = "Jeg er tekst i en rød boks, som vises når knappen trykkes på.";
squareRedShowText.appendChild(squareRedText); 

squareRedButton.addEventListener("click", function() {
    
    console.log("Rød knapp trykket på");

    squareRedText.classList.toggle("hidden");   

    
});

// Blue Square
const squareBlueShowImg = document.querySelector("#squareBlueShowImg");
const squareBlueButton = document.querySelector("#squareBlueButton");

