const shirt_handler = document.querySelector('#shirt');
const hair_handler = document.querySelector('#hair');
const glasses_handler = document.querySelector('#glasses');
const trousers_handler = document.querySelector('#trousers');

const buttons_handler = document.querySelectorAll('.buttons');
const left_div_handler = document.querySelector('#div_main_left');

for(const button of buttons_handler) {
    button.addEventListener('click', () => {
        if(left_div_handler.style.backgroundImage.includes(`${button.value}.png`)) {
            left_div_handler.style.backgroundImage = left_div_handler.style.backgroundImage.replace(`, url("Media/simpsons-assets/${button.value}.png")`,'')
        } else {
            left_div_handler.style.backgroundImage += `, url("Media/simpsons-assets/${button.value}.png")`;
        }
    })
}


