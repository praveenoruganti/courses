const btnShowMsg = document.getElementById("show-message");
const btnCancelMsg = document.getElementById("cancel-message");

let intervalID;

btnShowMsg.addEventListener("click", function () {
  intervalID = setTimeout(function () {
    alert(
      'Checkout my tech Website \n "https://praveenoruganti.github.io"'
    );
  }, 2000);
});

btnCancelMsg.addEventListener("click", function () {
  clearTimeout(intervalID);
});
