document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.getElementById('number-display');
    const generateButton = document.getElementById('generate-number');
    const userInput = document.getElementById('user-input');
    const checkButton = document.getElementById('check-number');
    const resultDisplay = document.getElementById('result');
    
    let currentNumber = null;
    
    let number = 50;

    function generateRandomNumber() {
        currentNumber = Math.floor(Math.random() * 1000) + 1;
        numberDisplay.textContent = currentNumber;
        setTimeout(() => {
            numberDisplay.textContent = 'Digite o número que viu';
        }, 500-number);
    }
     

    number = number + 50;
    function checkNumber() {
        const userAnswer = parseInt(userInput.value, 10);
        if (userAnswer === currentNumber) {
            resultDisplay.textContent = 'Correto!';
            resultDisplay.style.color = 'green';
        } else {
            resultDisplay.textContent = 'Incorreto. O número era ' + currentNumber;
            resultDisplay.style.color = 'red';
        }
        userInput.value = ''; 
    }
    
    generateButton.addEventListener('click', generateRandomNumber);
    checkButton.addEventListener('click', checkNumber);
});
