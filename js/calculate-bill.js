//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

function calculateBill() {

var billTotal = 0;

function telephoneBill(billType){

 if (billType === "call") {

    billTotal += 2.75;
 }
  
 else if (billType === "sms") {

    billTotal += 0.75;
 }
    }
    function totalBill(){
      return billTotal.toFixed(2);
}


function stopCount(){
   if(billTotal >= 20 && billTotal <= 30){
      return "orange";
   }
   if(billTotal >= 30){
      return "red";
   }

}
return{
    
     billsTotal: telephoneBill,
     bills: totalBill,
     danger: stopCount,

   }
}

