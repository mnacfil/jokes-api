const url = 'https://api.chucknorris.io/jokes/random'
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');

btn.addEventListener('click', () => {
    displayJokes(url)
    .then((response) => displayData(response))
    .catch(err => console.log(err))
})
function displayJokes(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.send();
        console.log(xhr);
        xhr.onreadystatechange = function () {
            if(xhr.readyState !==4) return
            if(xhr.status === 200) {    
                resolve(xhr.responseText)
            } else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText,
                })
            }        
        }
        })  
}

function displayData(data) {
    img.classList.add('shake-img')
    const {value} = JSON.parse(data)
    content.innerHTML = value;
    setTimeout(() => {
        img.classList.remove('shake-img')
    },Math.random() * 1000)            
}
