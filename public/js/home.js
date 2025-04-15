document.body.style.overflow = "hidden";

const texts = [
	"Lunaar",
	"Freedom",
	"Perfection",
	"The Future",
	"The Ultimate Experience",
	"The best site!",
	"Speed",
	"Privacy",
	"Security",
	"Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles Pickles",
];
const typingSpeed = 90;
const delayBetweenTexts = 1500;

let currentTextIndex = 0;
let currentCharIndex = 0;

const typingTextElement = document.getElementById("typing-text");
const cursorElement = document.querySelector(".cursor");

function typeText() {
	const currentText = texts[currentTextIndex];
	if (currentCharIndex < currentText.length) {
		typingTextElement.textContent += currentText[currentCharIndex];
		currentCharIndex++;
		setTimeout(typeText, typingSpeed);
	} else {
		setTimeout(eraseText, delayBetweenTexts);
	}
}

function eraseText() {
	const currentText = texts[currentTextIndex];
	if (currentCharIndex > 0) {
		typingTextElement.textContent = currentText.slice(0, currentCharIndex - 1);
		currentCharIndex--;
		setTimeout(eraseText, typingSpeed);
	} else {
		currentTextIndex = (currentTextIndex + 1) % texts.length;
		setTimeout(typeText, typingSpeed);
	}
}

typeText();
