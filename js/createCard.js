const createBaloon = (poster) =>{
  const baloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = baloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = poster.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = (poster.location.lat).toFixed(5) + ',' + (poster.location.lng).toFixed(5);
  popupElement.querySelector('.popup__text--price').textContent = poster.offer.price + '₽/ночь';
  popupElement.querySelector('.popup__type').textContent = poster.offer.type;
  if(poster.offer.type === 0){
    popupElement.querySelector('.popup__type').remove();
  }
  popupElement.querySelector('.popup__text--capacity').textContent = poster.offer.rooms + ' комнаты для ' + poster.offer.guests + ' гостей';
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + poster.offer.checkin + ', выезд до ' + poster.offer.checkout;
  popupElement.querySelector('.popup__features').textContent = poster.offer.features;
  popupElement.querySelector('.popup__description').textContent = poster.offer.description;
  popupElement.querySelector('.popup__avatar').src = poster.author.avatar;
  const photoContainer = popupElement.querySelector('.popup__photos');
  const photo = popupElement.querySelector('.popup__photo');
  const photoInCard = poster.offer.photos;

  if (Array.isArray(photoInCard)) {
    for(let i = 0; i < photoInCard.length; i++){
      photo.remove();
      const clonePhoto = photo.cloneNode(true);
      clonePhoto.src = poster.offer.photos[i];
      photoContainer.appendChild(clonePhoto);
    }
  } else {
    photoContainer.remove();
  }
  return popupElement;
}


export {createBaloon};

