import './siteStatus.js';
import './formValidation.js';
import { renderMarker, renderMainMarker } from './map.js';
import { setUserFormSubmit } from './formValidation.js';
import { getData } from './api.js';
import { setHouseTypeClick, setPriceTypeClick, setRoomsTypeClick, setHousingGuestsClick, setHousFeaturesClick } from './filterForm.js';

const markerContainer = document.querySelector('.leaflet-marker-pane');

getData((cards) => {
  renderMarker(cards);
  setHouseTypeClick (() => {
    markerContainer.innerHTML = '';
    renderMainMarker();
    renderMarker(cards);
  });
  setPriceTypeClick (() => {
    markerContainer.innerHTML = '';
    renderMainMarker();
    renderMarker(cards);
  });
  setRoomsTypeClick (() => {
    markerContainer.innerHTML = '';
    renderMainMarker();
    renderMarker(cards);
  });
  setHousingGuestsClick (() => {
    markerContainer.innerHTML = '';
    renderMainMarker();
    renderMarker(cards);
  });
  setHousFeaturesClick (() => {
    markerContainer.innerHTML = '';
    renderMainMarker();
    renderMarker(cards);
  });
});

setUserFormSubmit();
