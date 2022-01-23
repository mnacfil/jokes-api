const url = 'https://api.chucknorris.io/jokes/random'
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');

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
            img.classList.add('shake-img')
            const {value} = JSON.parse(xhr.responseText)
            content.innerHTML = value;
            setTimeout(() => {
                img.classList.remove('shake-img')
            },Math.random() * 1000)           
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
        
    }
    xhr.send();
}

