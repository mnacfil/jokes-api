const URL = 'https://api.chucknorris.io/jokes/random'
const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const img = document.querySelector('.container img');

btn.addEventListener('click', async () => {
    try {
        const data = await fetch(URL);
        const response = await data.json();
        displayData(response)
        console.log(response);
    } catch (error){
        console.log(error);
    }
    });
    
function displayData({value}) {
    img.classList.add('shake-img')
    content.innerHTML = value;
    setTimeout(() => {
        img.classList.remove('shake-img')
    },Math.random() * 1000)            
}
