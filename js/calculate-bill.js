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

