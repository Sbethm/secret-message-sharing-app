document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    const encrypted = input.value;


    document.querySelector('#link-input').value = encrypted;
})