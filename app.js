const input = document.getElementById('textInput');
const output = document.getElementById('output');

input.addEventListener('input', function(e) {
    const text = e.target.value;
    
    if (text.trim() === '') {
        output.textContent = 'Здесь появится ваш текст';
        output.classList.add('empty');
    } else {
        output.textContent = text;
        output.classList.remove('empty');
    }
});