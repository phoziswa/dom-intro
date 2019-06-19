var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");



billTotalElement.innerHTML = roundedBillTotal;
if (billTotal.criticalLevel) {

    billTotalElement.classList.add("danger");
    billTotalElement.classList.remove("warning");
}
else if (billTotal.warningLevel) {
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");
}

else {
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
}
calculateBtn.addEventListener("click", )