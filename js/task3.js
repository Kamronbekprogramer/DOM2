const form = document.querySelector('form');

function checkBrackets(event) {
    event.preventDefault(); 

    const inputText = document.getElementById('text').value;
    
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === '(') {
            openCount++;
        } else if (inputText[i] === ')') {
            closeCount++;
        }
    }

    const resultDiv = document.querySelector('.result');
    const resultHeading = resultDiv.querySelector('h1');
    resultHeading.textContent = ` ${openCount === closeCount ? 'Qavslar teng' : `Qavslarning ${Math.abs(openCount - closeCount)} tasi ${openCount > closeCount ? 'ochiqda ko\'p' : 'yopiqda ko\'p'},`}`;

}

form.addEventListener('submit', checkBrackets);
