
function TextBillFactory() {
    var smsTotal1 = 0;
    var callsTotal1 = 0;
    var total = 0;

    function bills(data) {
        if (data === "call") {
            callsTotal1 += 2.75;
          
        }
        else if (data === "sms") {
            smsTotal1 += 0.75;      
        }

        total = callsTotal1 + smsTotal1;
    
    }
    function getCalls() {
        return callsTotal1.toFixed(2)
    }
    function getSms() {
        return smsTotal1.toFixed(2)
    }

    function getTotal() {
        return total.toFixed(2)
    }
    function colors() {
        if (total >= 50) {
            return "danger";

        } else if (total >= 30 && total < 50) {
            return "warning";
        }
    }
    return {
        bills,
        getCalls,
        getSms,
        getTotal,
        colors

    }
}
// function textBillTotal(){

//     // var billTypeEntered = billTypeTextElement.value.trim();

//     if (billTypeEntered === "call"){
//         callsTotal1 += 2.75
//     }
//     else if (billTypeEntered === "sms"){
//         smsTotal1 += 0.75;
//     }

//     callTotalOneElement.innerHTML = callsTotal1.toFixed(2);
//     smsTotalOneElement.innerHTML = smsTotal1.toFixed(2);
//     var totalCost = callsTotal1 + smsTotal1;
//     totalOneElement.innerHTML = totalCost.toFixed(2);

//     if (totalCost >= 50) {

//         totalOneElement.classList.add("danger");
//     }
//     else if (totalCost >= 30){
//         totalOneElement.classList.add("warning");
//     }

// }

