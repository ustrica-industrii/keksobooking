/* eslint-disable no-undef */
import {createBaloon} from './createCard.js';
import {addEnabledStatus,formDescription,formFilters} from './siteStatus.js';
import {inputAddress} from './formValidation.js'

const map = L.map('map-canvas')
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

map.on('load', addEnabledStatus(formDescription));
map.on('load', addEnabledStatus(formFilters));

const mainMarkerIcon = L.icon({
  iconUrl: './leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    icon: mainMarkerIcon,
    draggable: true,
  },
);
mainMarker.addTo(map);

const markerIcon = L.icon({
  iconUrl: './leaflet/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//Пробуем в сортировку


const Default = {
  HOUSING_TYPE: 'any',
  PRICE_TYPE: 'any',
};
const getCardRank = (card) => {
  const typeOfHousingCard = document.querySelector('#housing-type');
  const typeOfPriceCard = document.querySelector('#housing-price');

  let rank = 0;

  if (card.offer.type === typeOfHousingCard.value || Default.HOUSING_TYPE) {
    rank += 2;
  }
  if(card.offer.price === typeOfPriceCard.value || Default.PRICE_TYPE) {
    rank += 10;
  }

  return rank;
}


const compareCards = (cardA, cardB) => {
  const rankA = getCardRank(cardA);
  const rankB = getCardRank(cardB);

  return rankB - rankA;
};

const SIMLAR_CARD_COUNT = 10;


const renderMarker = (cards) => {

  cards
    .slice()
    .sort(compareCards)
    .slice(0, SIMLAR_CARD_COUNT)
    .forEach((card) => {
      const marker = L.marker(
        {
          lat: card.location.lat,
          lng: card.location.lng,
        },
        {
          icon: markerIcon,
        },
      );
      marker.addTo(map).bindPopup(createBaloon(card));
    })};

//const inputAddress = formDescription.querySelector('#address');
// inputAddress.value = '35.68950,139.69171';

mainMarker.on('moveend', (evt) => {
  const newCoordinate = evt.target.getLatLng();
  const coordinateValue = Object.values(newCoordinate);
  let toFixedCoorditate = [];
  for(let i=0;i<coordinateValue.length;i++){
    toFixedCoorditate[i]=coordinateValue[i].toFixed(5)
  }
  inputAddress.value = toFixedCoorditate;
});
// let inputAddressArray = new Array(inputAddress.value);
// console.log(inputAddressArray)
// let lat = inputAddressArray[0];
// let lng = inputAddressArray[1];
// mainMarker.setLatLng({lat, lng}),update();

export {renderMarker}
