const colors = ["red", "yellow", "#f1f5f8", "rgb(27, 203, 216)", "rgb(214, 100, 176)", "green", "#000000", "blue"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = function() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})