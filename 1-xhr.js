const url = 'https://api.chucknorris.io/jokes/random'
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    displayJokes(url)
});

function displayJokes(url) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    console.log(xhr);
    xhr.onreadystatechange = function () {
        if(xhr.readyState !==4) return
        if(xhr.status === 200) {
            const {value} = JSON.parse(xhr.responseText)
            console.log(value);
            content.innerHTML = value
        }
        
    }
    xhr.send();
}

