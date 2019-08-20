
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");


var billDataElement = document.querySelector(".radioBillData");
var templateSources = document.querySelector(".billTemplate").innerHTML;
var billTemplates = Handlebars.compile(templateSources);

instance = RadioBillFactory()
radioBill()
function radioBill(){
    // alert("molo!")
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
}
instance.phoneBills(billItemType);
var changingColor = instance.colorsChange()

var handbar = billTemplates({

    call: "R" + instance.getCallBill(),
    sms: "R" + instance.getSmsBill(),
    total: "R" + instance.getTotalBill(),
    changingColor

});
billDataElement.innerHTML = handbar;

}
radioBillAddBtnElement.addEventListener('click', radioBill);

