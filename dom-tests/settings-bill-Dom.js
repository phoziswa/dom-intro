var billItemTypeWithSettingsElement = document.querySelectorAll(".billItemTypeWithSettings");
// get refences to all the settings fields
var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var totalSettingsElement = document.querySelector(".totalSettings");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
//get a reference to the add button from HTML
var settingsBillAddBtnElement = document.querySelector(".settingsAddBtn");
//get a reference to the 'Update settings' button
var updateSettingsBtnElement = document.querySelector(".updateSettings");

// // create a variables that will keep track of all the settings
// var criticalLevel = criticalLevelSettingElement.value;
// var warningLevel = warningLevelSettingElement.value;
// // create a variables that will keep track of all three totals.

if (total3 >= criticalLevel) {
    totalSettingsElement.classList.add("danger");
    settingsBillAddBtnElement.disabled = true;
 }
 if (total3 < criticalLevel) {
     totalSettingsElement.classList.remove("danger");
     totalSettingsElement.classList.add("warning");
     settingsBillAddBtnElement.disabled = false;

 }
 if  (total3 >= warningLevel) {
     totalSettingsElement.classList.add("warning");
 }
 if (total3 < warningLevel) {
     totalSettingsElement.classList.remove("warning");
     totalSettingsElement.classList.remove("danger");

 }
}

if (total3 >= criticalLevel) {
    totalSettingsElement.classList.add("danger");
    settingsBillAddBtnElement.disabled = true;
}
if (total3 < criticalLevel) {
    totalSettingsElement.classList.remove("danger");
    totalSettingsElement.classList.add("warning");
    settingsBillAddBtnElement.disabled = false;

}
if  (total3 >= warningLevel) {
    totalSettingsElement.classList.add("warning");
}
if (total3 < warningLevel) {
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.remove("danger");


}
}


//add an event listener for when the 'Update settings' button is pressed
settingsBillAddBtnElement.addEventListener('click', addBtnSelected);
updateSettingsBtnElement.addEventListener('click', updateSettingsBtn);
