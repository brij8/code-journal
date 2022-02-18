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
  var entry = {
    title: event.target[0].value,
    image: event.target[1].value,
    note: event.target[2].value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entry);
  document.getElementById('preview').src = 'images/placeholder-image-square.jpg';
  event.target.reset();
}

function entryToDOM(event) {

  var $entryLI = document.createElement('li');
  $entryLI.className = 'entry-list-item';

  var $row = document.createElement('row');
  $row.className = 'row';
  $entryLI.appendChild($row);

  var $columnHalf01 = document.createElement('div');
  $columnHalf01.className = 'column-half';
  $row.appendChild($columnHalf01);

  var $entryImg = document.createElement('div');
  $entryImg.className = 'entry-image';
  $columnHalf01.appendChild($entryImg);

  var $imgUrl = document.createElement('img');
  $imgUrl.setAttribute('src', event.image);
  $imgUrl.id = 'entryImg';
  $entryImg.appendChild($imgUrl);

  var $columnHalf02 = document.createElement('div');
  $columnHalf02.className = 'column-half';
  $row.appendChild($columnHalf02);

  var $entryDiv = document.createElement('div');
  $entryDiv.className = 'entry-div';
  $columnHalf02.appendChild($entryDiv);

  var $entryLabel = document.createElement('div');
  $entryLabel.className = 'entry-label';
  $entryDiv.appendChild($entryLabel);

  var $entryTitle = document.createElement('label');
  $entryTitle.setAttribute('for', 'entry-title');
  $entryTitle.innerHTML = event.title;
  $entryLabel.appendChild($entryTitle);

  var $entryText = document.createElement('div');
  $entryText.className = 'entry-text';
  $entryDiv.appendChild($entryText);

  var $entryCopy = document.createElement('p');
  $entryCopy.innerHTML = event.note;
  $entryText.appendChild($entryCopy);

  return $entryLI;

}

window.addEventListener('DOMContentLoaded', appendLi);

function appendLi(event) {
  var $entryList = document.querySelector('.entry-list');
  for (let i = 0; i < data.entries.length; i++) {
    $entryList.appendChild(entryToDOM(data.entries[i]));
  }
}
