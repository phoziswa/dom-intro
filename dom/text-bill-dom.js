var billTypeTextElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".addToBillBtn");
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

var billDataElem = document.querySelector(".billData");
var templateSource = document.querySelector(".billTemplate").innerHTML;
var billTemplate = Handlebars.compile(templateSource);


instance = TextBillFactory()

billData();
function billData(){
    instance.bills(billTypeTextElement.value);
    var changingColor = instance.colors()
    var handbars = billTemplate({

        call: "R" + instance.getCalls(),
        sms: "R" + instance.getSms(),
        total: "R" + instance.getTotal(),
        changingColor
    
    });
    billDataElem.innerHTML = handbars;
}

addToBillBtnElement.addEventListener('click', billData)

