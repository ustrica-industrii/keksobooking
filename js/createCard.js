const createBaloon = (poster) =>{
  const baloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = baloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = poster.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = poster.offer.address.x + ',' + poster.offer.address.y;
  popupElement.querySelector('.popup__text--price').textContent = poster.offer.price + '₽/ночь';
  popupElement.querySelector('.popup__type').textContent = poster.offer.type;
  if(poster.offer.type === 0){
    popupElement.querySelector('.popup__type').remove();
  }
  popupElement.querySelector('.popup__text--capacity').textContent = poster.offer.rooms + ' комнаты для ' + poster.offer.quests + ' гостей';
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + poster.offer.chekin + ', выезд до ' + poster.offer.checkout;
  popupElement.querySelector('.popup__features').textContent = poster.offer.features;
  popupElement.querySelector('.popup__description').textContent = poster.offer.description;
  popupElement.querySelector('.popup__avatar').src = poster.author.avatar;
  const photo = popupElement.querySelector('.popup__photo');
  if(poster.offer.photos.length === 0){
    popupElement.querySelector('.popup__photos').remove()
  }
  for(let i=0;i<poster.offer.photos.length;i++){
    const clonePhoto = photo.cloneNode(true);
    photo.remove()
    clonePhoto.src = poster.offer.photos[i];
    popupElement.querySelector('.popup__photos').appendChild(clonePhoto);
  }

  return popupElement
}


export {createBaloon};

