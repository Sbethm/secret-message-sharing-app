document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    const encrypted = btoa(input.value);


    const message = document.querySelector('#link-input');
    message.value = `${window.location}#${encrypted}`;
    // message.select();

    const card = document.querySelector('.card1');
    const card = document.querySelector('.card1');
    card.classList.toggle('hide');
    
})
