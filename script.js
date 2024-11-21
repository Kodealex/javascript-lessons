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

const squareBlueImg = document.createElement("img");
squareBlueImg.src = "hamburger.png";
squareBlueImg.alt = "Hamburger Bildet som ska vær her";
squareBlueImg.classList.add("hamburger");
squareBlueShowImg.appendChild(squareBlueImg);

squareBlueButton.addEventListener("click", function() { 
    console.log(squareBlueShowImg);
    console.log("Knapp trykket på");
    squareBlueImg.classList.toggle("hidden");
});

// Hamburger meny til oppgaven
// velger nav menyen og lager bildet som skal tilsvare hamburger bildet
// Lager button/knapp elementet som skal være hamburger bildet
const nav = document.querySelector("#navmenu");
const navHamburger = document.createElement("img");
const navHamburgerIcon = document.createElement("button");

navHamburger.src = "hamburger.png";
navHamburger.alt = "Hamburger bildet skal vær her";
navHamburger.classList.add("hamburger");
navHamburgerIcon.classList.add("hamburgerbutton");
console.log(navHamburger);

// Legg til hamburgerIcon class til button elementet
// lag til hamburgerIcon som child til nav og bildet navhamburger som child
// til Knappen hamburgerIcon
navHamburgerIcon.classList.add("hamburgerIcon")
nav.appendChild(navHamburgerIcon);
navHamburgerIcon.appendChild(navHamburger);

// henter IDen til UL elementet for å vise og gjemme UL elementet
// Legger ul menyen til som child til navmenyen og hamburger knappen
const ulShowmenu = document.querySelector("#Showmenu");
navHamburger.appendChild(ulShowmenu);

// legger til en addeventlistener til hamburgerIcon knappen
navHamburgerIcon.addEventListener("click", function() {

    console.log("Hamburger knapp trykket på!");
    ulShowmenu.classList.toggle("hidden");
});
