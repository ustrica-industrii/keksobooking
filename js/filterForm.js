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

const setHousTypeClick = (cb) => {
  housingType.addEventListener('change', () => {
    cb();
  });
}


housingPrice.addEventListener('change', () => {

});

export {resetFilter,setHousTypeClick}
