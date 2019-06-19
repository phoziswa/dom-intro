// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

// var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

 var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");



 callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
var total = callsTotal + smsTotal;
totalTwoElement.innerHTML = total.toFixed(2);

 if (total >= 50) {

     totalTwoElement.classList.add("danger");
}
else if (total >= 30){
    totalTwoElement.classList.add("warning");
}

 }

 radioBillAddBtnElement.addEventListener('click', radioBillTotal);
