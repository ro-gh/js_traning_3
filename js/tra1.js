/*
const h1ElmList = document.getElementsByTagName('h1');
const h1Elm = h1ElmList[0]
h1Elm.addEventListener('click', changeColor);
function changeColor() {
    const label = document.getElementsByTagName('label');
    label.style.Color = 'red';
}
*/
const clickH1 = document.getElementsByTagName('h1');
console.log('ok');

clickH1.addEventListener('click', changeColor);
const changeColor = () => {
    const h1ElmList = document.getElementsByTagName('h1');
    const h1Elm = h1ElmList[0];
    h1Elm.style.color = 'red';
}
