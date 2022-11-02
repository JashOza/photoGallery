const imgOne = document.querySelector('.imgOne');
const imgTwo = document.querySelector('.imgTwo');
const imgThree = document.querySelector('.imgThree');
const imgFour = document.querySelector('.imgFour');
const imgFive = document.querySelector('.imgFive');
const imgSix = document.querySelector('.imgSix');
const figCaption = document.querySelector('.figCaption');



imgTwo.addEventListener('click', e => {
    imgOne.src = 'images/flowers-pink-large.jpg';
    figCaption.textContent = "Picture of large pink flower";
});

imgThree.addEventListener('click', e => {
    imgOne.src = 'images/flowers-purple-large.jpg';
    figCaption.textContent = "Picture of large purple flower";
});

imgFour.addEventListener('click', e => {
    imgOne.src = 'images/flowers-red-large.jpg';
    figCaption.textContent = "Picture of large red flower";
});

imgFive.addEventListener('click', e => {
    imgOne.src = 'images/flowers-white-large.jpg';
    figCaption.textContent = "Picture of large white flower";
});

imgSix.addEventListener('click', e => {
    imgOne.src = 'images/flowers-yellow-large.jpg';
    figCaption.textContent = "Picture of large yellow flower";
});
