var numElements = document.querySelectorAll("#num");

numElements.forEach(function (numElement) {
  numElement.addEventListener("click", function () {
    numElements.forEach(function (el) {
      el.style.backgroundColor = "";
      el.style.color = "";
    });
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "white";
    var selectedNumElem = document.getElementById("selected-num");
    selectedNumElem.innerText = this.innerText;
  });
});

var mainContainer = document.querySelector(".main-container");
var resultsContainer = document.querySelector(".results-container");
var submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", function () {
  mainContainer.style.display = "none";
  resultsContainer.style.display = "flex";
});
