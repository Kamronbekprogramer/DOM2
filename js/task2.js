const form = document.querySelector('form');
function checkFile(event) {
    event.preventDefault(); 

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const fileSizeKB = (file.size / 1024).toFixed(2);

    const comment = document.querySelector('input[type="text"]').value;

    const resultDiv = document.querySelector('.result');
    const resultHeading = resultDiv.querySelector('h1');

    resultHeading.textContent = `File hajmi: ${fileSizeKB} KB. Izoh: ${comment}`;
}

form.addEventListener('submit', checkFile);
