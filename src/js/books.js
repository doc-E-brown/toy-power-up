const form = document.getElementById("search");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(JSON.stringify(event))
})