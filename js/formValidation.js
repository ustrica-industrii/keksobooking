const posterForm = document.querySelector('.ad-form');
const inputTitle = posterForm.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

inputTitle.addEventListener ('input', () => {
    const valueLength = inputTitle.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
        inputTitle.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
    }
    else if (valueLength > MAX_TITLE_LENGTH) {
        inputTitle.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
    }
    else {
        inputTitle.setCustomValidity('');
    }

    inputTitle.reportValidity();
});

const selectTypeOfHousing = posterForm.querySelector('#type');
const inputPrice = posterForm.querySelector('#price');
let minPrice = 1000;
const maxPrice = 1000000;
inputPrice.addEventListener ('input', () => {
    if (inputPrice.value < minPrice) {
        inputPrice.setCustomValidity('Братишка, подними цену на ' + (minPrice - inputPrice.value));
    }
    else if (inputPrice.value > maxPrice) {
        inputPrice.setCustomValidity('Братaн, скинь цену на ' + (inputPrice.value - maxPrice));
    }
    else {
        inputPrice.setCustomValidity('')
    }
    inputPrice.reportValidity()
})

let pricePlaceholder = 5000;
selectTypeOfHousing.addEventListener('change', () => {
    if(selectTypeOfHousing.value === "bungalow"){
        pricePlaceholder = 0;
    }
    else if(selectTypeOfHousing.value === "flat"){
        pricePlaceholder = 1000;
    }
    else if(selectTypeOfHousing.value === "house") {
        pricePlaceholder = 5000;
    }else{
        pricePlaceholder = 10000;
    }
    minPrice = pricePlaceholder;
    inputPrice.placeholder = pricePlaceholder;
});

