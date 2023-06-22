/* eslint-disable no-undef */
import { similarPosters } from './data.js';
import {createBaloon} from './createCard.js';
import {addEnabledStatus,formDescription,formFilters} from './siteStatus.js';

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



similarPosters.forEach((poster) => {
  const markerIcon = L.icon({
    iconUrl: './leaflet/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: poster.offer.address.x,
      lng: poster.offer.address.y,
    },
    {
      icon: markerIcon,
      //draggable: true,
    },
  );

  marker.addTo(map).bindPopup(createBaloon(poster));
})


const inputAddress = formDescription.querySelector('#address');
inputAddress.value = '35.68950,139.69171';

mainMarker.on('moveend', (evt) => {
  const newCoordinate = evt.target.getLatLng();
  const coordinateValue = Object.values(newCoordinate);
  let toFixedCoorditate = [];
  for(let i=0;i<coordinateValue.length;i++){
    toFixedCoorditate[i]=coordinateValue[i].toFixed(5)
  }
  inputAddress.value = toFixedCoorditate;
});


