function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);
