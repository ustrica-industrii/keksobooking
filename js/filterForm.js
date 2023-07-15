const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures =filterForm.querySelector('#housing-features');
const featuresCheckbox = housingFeatures.querySelectorAll('input');
// const options = {
//   TYPE: [
//     'any',
//     'palace',
//     'flat',
//     'house',
//     'bungalow',
//   ],
//   PRICE : [
//     'any',
//     'middle',
//     'low',
//     'high',
//   ],
// };


const resetFilter = () => {
  housingType.value = 'any';
  housingPrice.value = 'any';
  housingRooms.value = 'any';
  housingGuests.value = 'any';
  for (let i = 0; i < featuresCheckbox.length; i++) {
    featuresCheckbox[i].checked = false;
  }
}

const setHouseTypeClick = (cb) => {
  housingType.addEventListener('change', () => {
    cb();
  });
};

const setPriceTypeClick = (cb) => {
  housingPrice.addEventListener('change', () => {
    cb();
  });
};

const setRoomsTypeClick = (cb) => {
  housingRooms.addEventListener('change', () => {
    cb();
  });
};

const setHousingGuestsClick = (cb) => {
  housingGuests.addEventListener('change', () => {
    cb();
  });
};

const setHousFeaturesClick = (cb) => {
  for(let i = 0; i < featuresCheckbox.length; i++) {
    featuresCheckbox[i].addEventListener('change', (cb) => {
      cb();
      console.log('click!')
    })  
  }
};
export {resetFilter, setHouseTypeClick, setPriceTypeClick, setRoomsTypeClick, setHousingGuestsClick, setHousFeaturesClick}
