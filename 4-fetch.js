const URL = 'https://api.chucknorris.io/jokes/random'
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');
// fetch is promise base by default
// json() by defualt is gonna be return promise
btn.addEventListener('click', () => {
    fetch(URL) // by defualt it's gonna be GET
    .then(data => data.json()).then(response => displayData(response))
    .catch(err => console.log(err));
})

function displayData({value}) {
    img.classList.add('shake-img')
    content.innerHTML = value;
    setTimeout(() => {
        img.classList.remove('shake-img')
    },Math.random() * 1000)            
}
