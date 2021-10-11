document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.message-input');
    

    
    document.querySelector('#link-input').value = encrypted;
})