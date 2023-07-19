const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const posterForm = document.querySelector('.ad-form');
const avatarFileChooser = posterForm.querySelector('.ad-form__field input[type=file]');
const avatarPreview = posterForm.querySelector('.ad-form-header__preview img');
const housePhotoChooser = posterForm.querySelector('.ad-form__upload input[type=file]');
const housePhotoContainer = posterForm.querySelector('.ad-form__photo');

const toUploadPhoto = (photoChooser, photoPreview) => {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
}


avatarFileChooser.addEventListener('change', () => {
  toUploadPhoto(avatarFileChooser, avatarPreview);
});

housePhotoChooser.addEventListener('change', () => {
  housePhotoContainer.innerHTML = '';
  const housePhotoImg = document.createElement('img');
  housePhotoImg.style.width = '100%';
  housePhotoImg.style.height = '100%';
  housePhotoContainer.appendChild(housePhotoImg);
  toUploadPhoto(housePhotoChooser, housePhotoImg);
});
