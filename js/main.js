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

function subFunc(event) {
  event.preventDefault();
  var journalJSON = localStorage.getItem('javascript-local-storage');
  let dataModel;
  if (journalJSON !== null) {
    dataModel = JSON.parse(journalJSON);
  } else {
    dataModel = {
      nextEntryId: 0,
      entries: []
    };
  }

  var entry = {
    title: event.target[0].value,
    image: event.target[1].value,
    note: event.target[2].value,
    entryId: dataModel.nextEntryId
  };

  dataModel.entries.unshift(entry);
  dataModel.nextEntryId++;

  var dataModelJSON = JSON.stringify(dataModel);
  localStorage.setItem('javascript-local-storage', dataModelJSON);

  document.getElementById('preview').src = 'images/placeholder-image-square.jpg';
  event.target.reset();
}
