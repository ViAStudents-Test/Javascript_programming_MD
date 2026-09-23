const ideaInput = document.getElementById('idea-input');
const colorInput = document.getElementById('color-input');
const btnAdd = document.getElementById('btn-add');
const board = document.getElementById('board');
const counter = document.getElementById('counter');

ideaInput.addEventListener('input', () => {
    counter.textContent = ideaInput.value.length + ' / 60';
});

btnAdd.addEventListener('click', () => {

    const idea = ideaInput.value.trim();
    const color = colorInput.value;

    if (idea === '') {
        alert('Please write an idea!');
        return;
    }

    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = color;

    const text = document.createElement('p');
    text.textContent = idea;

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');

    const time = new Date();

    timestamp.textContent = 'Added at ' +
        time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

    note.appendChild(text);
    note.appendChild(timestamp);

    board.appendChild(note);

    ideaInput.value = '';
    counter.textContent = '0 / 60';

});
