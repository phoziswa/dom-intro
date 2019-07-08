




function settingsBill(){

 var totalcalls3 = 0;
 var totalsms3 = 0;
 var totals3 = 0;
 var criticalStage = 0;
 var warningStage = 0;

 function chooseCalls(price){
   totalcalls3 += price
 }
 function getCalls(){
    return totalcalls3;
 }
 function chooseSms(price){
   totalsms3  += price
 }
 function getSms(){
   return  totalsms3 ;
}

    }
    