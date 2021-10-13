document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    const encrypted = btoa(input.value);


    const message = document.querySelector('#link-input');
    message.value = `${window.location}#${encrypted}`;
    // message.select();

    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    card1.classList.toggle('hide');
    card1.classList.toggle('hide');
    
})
