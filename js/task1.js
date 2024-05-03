const form = document.querySelector('form');

function checkWord(event) {
    event.preventDefault(); 

    const text = document.getElementById('text').value.toLowerCase();
    const word = document.getElementById('word').value.toLowerCase();

    const isWordExists = text.includes(word);

    const resultDiv = document.querySelector('.result');
    const resultHeading = resultDiv.querySelector('h1');

    if (isWordExists) {
        resultHeading.textContent = `Matnda "${word}" mavjud😊`;
    } else {
        resultHeading.textContent = `Matnda "${word}" mavjud emas😥`;
    }
}

form.addEventListener('submit', checkWord);
