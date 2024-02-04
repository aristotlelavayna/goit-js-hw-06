let input = document.getElementById("validation-input");
input.addEventListener("blur", function (e) {
  if (input.value.length >= 6) {
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("invalid");
  }
});