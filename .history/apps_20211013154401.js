const { hash } = window.location;


const message = atob(hash.replace('#', ''));

if(message) {
    
    document.querySelector('.message-show').classList.remove('hide');
    input.classList.add('hide');

    document.querySelector('h1').innerHTML = message;
}

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
