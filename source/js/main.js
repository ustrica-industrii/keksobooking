import './site-status.js';
import './form-validation.js';
import {renderMarker} from './map.js';
import {setUserFormSubmit} from './form-validation.js';
import {getData} from './api.js';
import {setHouseTypeClick, setPriceTypeClick, setRoomsTypeClick, setHousingGuestsClick, setHouseFeaturesClick, renderSimilarCards} from './filter-form.js';
import {debounce} from './util.js';
import './add-photo.js';


const RENDER_DELAY = 500;


getData((cards) => {
  renderMarker(cards);

  setHouseTypeClick(debounce(
    () => renderSimilarCards(cards),
    RENDER_DELAY,
  ));
  setPriceTypeClick(debounce(
    () => renderSimilarCards(cards),
    RENDER_DELAY,
  ));
  setRoomsTypeClick(debounce(
    () => renderSimilarCards(cards),
    RENDER_DELAY,
  ));
  setHousingGuestsClick(debounce(
    () => renderSimilarCards(cards),
    RENDER_DELAY,
  ));
  setHouseFeaturesClick(debounce(
    () => renderSimilarCards(cards),
    RENDER_DELAY,
  ));
});

setUserFormSubmit();
