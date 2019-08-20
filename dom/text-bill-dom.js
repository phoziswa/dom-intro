var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

var billDataElem = document.querySelector(".billData");
var templateSource = document.querySelector(".billTemplate").innerHTML;
var billTemplate = Handlebars.compile(templateSource);


var text = TextBillFactory()

billsData();
function billsData(){
    text.bills(billTypeTextElement.value);
    var changingColor = text.colors()
    var handbars = billTemplate({

        call: "R" + text.getCalls(),
        sms: "R" + text.getSms(),
        total: "R" + text.getTotal(),
        changingColor
    
    });
    billDataElem.innerHTML = handbars;
}

addToBillBtnElement.addEventListener('click', billsData)

