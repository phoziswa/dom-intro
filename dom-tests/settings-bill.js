// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.




// create a variables that will keep track of all three totals.
// var criticalLevel = criticalLevelSettingElement.value;
// var warningLevel = warningLevelSettingElement.value;

// var totalsms3 = 0;
// var totalcalls3 = 0;

// function updateSettingsBtn() {
//     warningLevel = Number(warningLevelSettingElement.value)
//     warningLevelSettingElement.innerHTML = warningLevel.toFixed(2);
//     criticalLevel = Number(criticalLevelSettingElement.value)
//     criticalLevelSettingElement.innerHTML = criticalLevel.toFixed(2);

//     var total3 = totalcalls3 + totalsms3
//    totalSettingsElement.innerHTML = total3.toFixed(2);



// function addBtnSelected() {
//     for (var i = 0; i < billItemTypeWithSettingsElement.length; i++) {
//         var elem = billItemTypeWithSettingsElement[i];
//         if (elem.checked) {
//             if (elem.value === "call") {
//                 totalcalls3 += Number(callCostSettingElement.value);
//                 callTotalSettingsElement.innerHTML = totalcalls3.toFixed(2);
//             }
//             else if (elem.value === "sms") {
//                 totalsms3 += Number(smsCostSettingElement.value);
//                 smsTotalSettingsElement.innerHTML = totalsms3.toFixed(2);
//             }
        
//             var total3 = totalcalls3 + totalsms3
//             totalSettingsElement.innerHTML = total3.toFixed(2);

//         }
//     }}}

    function settingsBill(){

        var totalsms3 = 0;
        var totalcalls3 = 0;

    function updateSettings(){  

        var criticalLevel = criticalLevelSettingElement.value;
        var warningLevel = warningLevelSettingElement.value;

    warningLevel = Number(warningLevelSettingElement.value)
    criticalLevel = Number(criticalLevelSettingElement.value)
    }
}
    