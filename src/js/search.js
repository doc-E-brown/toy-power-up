// const http = require('http');
var sanitize = function (value) {
  return value.replace(/ /g, '+').replace(/[^a-zA-Z0-9+]/g, '')
}

document.querySelector("#search").addEventListener('click', function () {

  const title = sanitize(document.getElementById("title").value);
  fetch('http://openlibrary.org/search.json?q=' + sanitize(title))
    .then(response => response.json())
    .then(data => console.log(data));

});