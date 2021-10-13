const { hash } = window.location;


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    const encrypted = btoa(input.value);


    const link = document.querySelector('#link-input');
    link.value = `${window.location}#${encrypted}`;
    

    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    card1.classList.toggle('hide');
    card2.classList.toggle('hide');
    
    link.select();
})
