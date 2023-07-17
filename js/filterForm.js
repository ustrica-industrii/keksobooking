const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures =filterForm.querySelector('#housing-features');
const featuresCheckboxNode = housingFeatures.querySelectorAll('input');
const featuresArray = Array.from(featuresCheckboxNode);
const baloon = document.querySelector('.leaflet-popup-pane');


const getCardRank = (card) => {
  let rank = 0;

  // if (card.offer.type === housingType.value) {
  //   rank += 5;
  // }
  // if ((housingPrice.value === 'middle' && card.offer.price > 10000) && (housingPrice.value === 'middle' && card.offer.price < 50000)) {
  //   rank += 1;
  // }
  // if (housingPrice.value === 'low' && card.offer.price < 10000) {
  //   rank += 1;
  // }
  // if (housingPrice.value === 'high' && card.offer.price > 50000) {
  //   rank += 1;
  // }
  // if (housingRooms.value === '3' &&  card.offer.rooms === 3) {
  //   rank += 1;
  // }
  // if (housingRooms.value === '2' &&  card.offer.rooms === 2) {
  //   rank += 1;
  // }
  // if (housingRooms.value === '1' &&  card.offer.rooms === 1) {
  //   rank += 1;
  // }
  // if (housingRooms.value === 'any' && card.offer.rooms > 3) {
  //   rank += 1;
  // }
  // if (housingGuests.value === '1' && card.offer.guests === 1) {
  //   rank += 1;
  // }
  // if (housingGuests.value === '2' && card.offer.guests === 2) {
  //   rank += 1;
  // }
  // if (housingGuests.value === 'any' && card.offer.guests > 3) {
  //   rank += 1;
  // }



  for ( let i = 0; i < featuresArray.length; i++) {
    featuresArray[i].addEventListener('change', () => {
      if (featuresArray[i].checked) {
        if (Array.isArray(card.offer.features)){
          for (let j =0; j < card.offer.features.length; j++){
            // console.log(card.offer.features)
            // console.log(newArray[i].value)
            if (card.offer.features.includes(featuresArray[i].value)) {

              rank +=5;
              //console.log(rank)
            }
          }
        }

      }
    })
  }
  return rank;
}

const compareCards = (cardA, cardB) => {
  const rankA = getCardRank(cardA);
  const rankB = getCardRank(cardB);
  return rankB - rankA;
};


const resetFilter = () => {
  housingType.value = 'any';
  housingPrice.value = 'any';
  housingRooms.value = 'any';
  housingGuests.value = 'any';
  for (let i = 0; i < featuresCheckboxNode.length; i++) {
    featuresCheckboxNode[i].checked = false;
  }
};

const setHouseTypeClick = (cb) => {
  housingType.addEventListener('change', () => {
    cb();
    //console.log(baloon)
    // baloon.remove();
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

const setHouseFeaturesClick = (cb) => {
  for(let i = 0; i < featuresArray.length; i++) {
    featuresArray[i].addEventListener('change', () => {
      cb();
    })
  }
};

export {resetFilter, setHouseTypeClick, setPriceTypeClick, setRoomsTypeClick, setHousingGuestsClick, setHouseFeaturesClick, getCardRank, compareCards}
