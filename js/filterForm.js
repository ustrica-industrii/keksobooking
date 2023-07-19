import { map, renderMarker, renderMainMarker } from './map.js';

const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures =filterForm.querySelector('#housing-features');
const featuresCheckboxNode = housingFeatures.querySelectorAll('input');
const featuresArray = Array.from(featuresCheckboxNode);


const getCardRank = (card) => {
  let rank = 0;

  if (card.offer.type === housingType.value) {
    rank += 6;
  }
  if ((housingPrice.value === 'middle' && card.offer.price > 10000) && (housingPrice.value === 'middle' && card.offer.price < 50000)) {
    rank += 5;
  }
  if (housingPrice.value === 'low' && card.offer.price < 10000) {
    rank += 5;
  }
  if (housingPrice.value === 'high' && card.offer.price > 50000) {
    rank += 5;
  }
  if (housingRooms.value === '3' &&  card.offer.rooms === 3) {
    rank += 3;
  }
  if (housingRooms.value === '2' &&  card.offer.rooms === 2) {
    rank += 3;
  }
  if (housingRooms.value === '1' &&  card.offer.rooms === 1) {
    rank += 3;
  }
  if (housingGuests.value === '1' && card.offer.guests === 1) {
    rank += 3;
  }
  if (housingGuests.value === '2' && card.offer.guests === 2) {
    rank += 3;
  }

  for (let i = 0; i < featuresArray.length; i++) {
    if (featuresArray[i].checked) {
      if (Array.isArray(card.offer.features)) {
        for (let j = 0; j < card.offer.features.length; j++){
          if (card.offer.features[j] === featuresArray[i].value) {
            rank +=1;
          }
        }
      }
    }
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
    map.closePopup();
  });
};

const setPriceTypeClick = (cb) => {
  housingPrice.addEventListener('change', () => {
    cb();
    map.closePopup();
  });
};

const setRoomsTypeClick = (cb) => {
  housingRooms.addEventListener('change', () => {
    map.closePopup();
    cb();
  });
};

const setHousingGuestsClick = (cb) => {
  housingGuests.addEventListener('change', () => {
    map.closePopup();
    cb();
  });
};

const setHouseFeaturesClick = (cb) => {
  for(let i = 0; i < featuresArray.length; i++) {
    featuresArray[i].addEventListener('change', () => {
      map.closePopup();
      cb();

    })
  }
};


const markerContainer = document.querySelector('.leaflet-marker-pane');
const renderSimilarCards = (card) => {
  markerContainer.innerHTML = '';
  renderMainMarker();
  renderMarker(card);
}

export {resetFilter, setHouseTypeClick, setPriceTypeClick, setRoomsTypeClick, setHousingGuestsClick, setHouseFeaturesClick, getCardRank, compareCards, renderSimilarCards}
