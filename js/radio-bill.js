function RadioBillFactory(){
    var smsBill = 0;
    var callsBill = 0;
    var totalBill = 0;

    function phoneBills(data) {
        if (data === "call") {
            callsBill += 2.75;
            totalBill += 2.75;
        }
        else if (data === "sms") {
            smsBill += 0.75;
            totalBill += 0.75;
        }
    
    }
    function getCallBill() {
        return callsBill.toFixed(2)
    }
    function getSmsBill() {
        return smsBill.toFixed(2)
    }

    function getTotalBill() {
        return totalBill.toFixed(2)
    }
    function colorsChange () {
        if (totalBill >= 50) {
            return "danger";

        } else if (totalBill >= 30 && totalBill < 50) {
            return "warning";
        }
    }
    return {
        phoneBills,
        getCallBill,
        getSmsBill,
        getTotalBill,
        colorsChange

    }
}




























// var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
// var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
// var callTotalTwoElement = document.querySelector(".callTotalTwo");
// var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
// var totalTwoElement = document.querySelector(".totalTwo");
   

// var smsTotal = 0;
// var callsTotal = 0;

// function radioBillTotal(){
//     var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
// if (checkedRadioBtn){
//     var billItemType = checkedRadioBtn.value
// }
//     if (billItemType === "call"){
//         callsTotal += 2.75;
//     }
//     else if (billItemType === "sms"){
//         smsTotal += 0.75;
//     }
    
//     callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
//     smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
//     var total = callsTotal + smsTotal;
//     totalTwoElement.innerHTML = total.toFixed(2);

//     if (total >= 50) {
    
//         totalTwoElement.classList.add("danger");
//     }
//     else if (total >= 30){
//         totalTwoElement.classList.add("warning");
//     }
    
// }
    
// radioBillAddBtnElement.addEventListener('click', radioBillTotal);

