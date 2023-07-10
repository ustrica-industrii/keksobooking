import './siteStatus.js';
import './formValidation.js';
import {renderMarker} from './map.js';
import { setUserFormSubmit } from './formValidation.js';
import {getData} from './api.js';


getData((cards) => {
  renderMarker(cards);
});

setUserFormSubmit();
