var yes = document.getElementById("yes-button");
var no = document.getElementById("no-button");
var form = document.getElementById("survey-form");

yes.onclick = function () {
  form.classList.remove("hidden");
  yes.classList.add("hidden");
  no.classList.add("hidden");
  document.getElementById("question").classList.add("hidden");
  document.getElementById("form-container").classList.add("change-background");
};

no.onclick = function () {
};