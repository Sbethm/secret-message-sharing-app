document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    const encrypted = btoa(input.value);


    const message = document.querySelector('#link-input');
    message.value = `${window.location}#${encrypted}`;
    message.see

    message.classList.toggle('hide');
    input.classList.toggle('hide');
})
