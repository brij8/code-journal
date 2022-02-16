/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');

$photoUrl.addEventListener('input', imgPreview);

function imgPreview(event) {
  document.getElementById('preview').src = document.getElementById('photo-url').value;
  if (document.getElementById('photo-url').value === '') {
    document.getElementById('preview').src = 'images/placeholder-image-square.jpg';
  }
}
