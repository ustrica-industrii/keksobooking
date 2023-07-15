import { sendData } from './api.js';
import { resetFilter } from './filterForm.js';
//import {renderMarker, renderMainMarker} from './map.js';

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
  if(selectTypeOfHousing.value === 'bungalow'){
    pricePlaceholder = 0;
  }
  else if(selectTypeOfHousing.value === 'flat'){
    pricePlaceholder = 1000;
  }
  else if(selectTypeOfHousing.value === 'house') {
    pricePlaceholder = 5000;
  }else{
    pricePlaceholder = 10000;
  }
  minPrice = pricePlaceholder;
  inputPrice.placeholder = pricePlaceholder;
});


const timeCheckin = posterForm.querySelector('#timein');
const timeCheckout = posterForm.querySelector('#timeout');

const changeTime = (firstTime, secondTime) => {
  if(firstTime.value === '12:00'){
    secondTime.value = '12:00';
  }else if(firstTime.value === '13:00'){
    secondTime.value = '13:00';
  }
  else if(firstTime.value === '14:00'){
    secondTime.value = '14:00';
  }
}

timeCheckin.addEventListener('change', () => {
  changeTime(timeCheckin, timeCheckout);
});

timeCheckout.addEventListener('change', () => {
  changeTime(timeCheckout, timeCheckin);
});

const roomNumber = posterForm.querySelector('#room_number');
const capacity = posterForm.querySelector('#capacity');
capacity.value = capacity.children[2].value;

roomNumber.addEventListener('change', () => {
  roomCapacityChange(roomNumber,capacity);
});

capacity.addEventListener('change', () => {
  roomCapacityChange(roomNumber,capacity)
});

const roomCapacityChange = (room, people) => {
  if(room.value === '100' && people.value !== '0'){
    people.setCustomValidity('не для гостей');
  }
  else if(room.value === '3' && people.value == '0'){
    people.setCustomValidity('для 3 гостей, для 2 гостей или для 1 гостя');
  }else if((room.value === '2' && people.value == '0') || (room.value === '2' && people.value == '3')){
    people.setCustomValidity('для 2 гостей или для 1 гостя');
  }
  else if((room.value === '1' && people.value == '0') || (room.value === '1' && people.value == '2') || (room.value === '1' && people.value == '3')){
    people.setCustomValidity('только для одного гостя');
  }
  else{
    people.setCustomValidity('');
  }
  people.reportValidity();
};

const inputAddress = posterForm.querySelector('#address');
inputAddress.value = '35.68950,139.69171';
const features = posterForm.querySelector('.features');
const featuresCheckbox = features.querySelectorAll('input');
const commentArea = posterForm.querySelector('#description');
const resetButton = posterForm.querySelector('.ad-form__reset');



const clearForm = () => {
  inputTitle.value = '';
  selectTypeOfHousing.value = 'flat';
  inputPrice.value = '';
  inputPrice.placeholder = '1000';
  timeCheckin.value = '12:00';
  timeCheckout.value = '12:00';
  roomNumber.value = '1';
  capacity.value = '1';
  inputAddress.value = '35.68950,139.69171';
  for (let j=0;j<featuresCheckbox.length;j++) {
    featuresCheckbox[j].checked = false;
  }
  commentArea.value = '';
}

// Сообщение об успешной отправке формы
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const body = document.querySelector('body');


const onSuccessMessageClick = () => {
  successMessage.addEventListener('click', () => {
    successMessage.remove();
    clearForm();
  });
};

const onSuccessMessageKeydown = () => {
  window.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      successMessage.remove();
    }
  })
};

//Сообщение об ошибке отправки формы
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
const errorButtton = errorMessage.querySelector('.error__button');

const onErrorButttonClick = () => {
  errorButtton.addEventListener('click', () => {
    errorMessage.remove();
  })
};
const onErrorMesssageClick = () => {
  errorMessage.addEventListener('click', () => {
    errorMessage.remove();
  })
};
const onErrorMessageKeydown = () => {
  window.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      errorMessage.remove();
    }
  })
};

const showErrorMessage = () => {
  body.appendChild(errorMessage);
  onErrorButttonClick();
  onErrorMesssageClick();
  onErrorMessageKeydown();
};


const sendForm = () => {
  body.appendChild(successMessage);
  onSuccessMessageClick();
  onSuccessMessageKeydown();
  clearForm();
  resetFilter();
};

// Отправка формы
const setUserFormSubmit = () => {
  posterForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => sendForm(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const resetForm = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearForm();
    resetFilter();
  })
}
resetForm();

export { setUserFormSubmit, inputAddress, resetForm, sendForm };
