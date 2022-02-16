/* global data */
/* exported data */
var $photoUrl = document.getElementById('photo-url');
var $submit = document.getElementById('form');

$photoUrl.addEventListener('input', imgPreview);
$submit.addEventListener('submit', subFunc);

function imgPreview(event) {
  document.getElementById('preview').src = document.getElementById('photo-url').value;
  if (document.getElementById('photo-url').value === '') {
    document.getElementById('preview').src = 'images/placeholder-image-square.jpg';
  }
}

var dataModel = {
  nextEntryId: 0,
  entries: []
};

function subFunc(event) {
  event.preventDefault();
  var entry = {
    title: event.target[0].value,
    image: event.target[1].value,
    note: event.target[2].value,
    entryId: dataModel.nextEntryId
  };
  dataModel.nextEntryId++;
  dataModel.entries.unshift(entry);
  document.getElementById('preview').src = 'images/placeholder-image-square.jpg';
  event.target.reset();
}
