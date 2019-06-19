describe('calculateBill function' , function(){
    it('should return the "2.75" in the billTotal when the string "call" is entered in the text box and calculate button is clicked' , function(){

         var phoneBills = calculateBill();
         phoneBills.billsTotal("call");

        assert.equal(phoneBills.bills(), 2.75);
    });
    it('should return the "R0.75" in the billTotal when the string "sms" is entered in the text box and calculate button is clicked' , function(){

        var phoneBills = calculateBill();
        phoneBills.billsTotal("sms");

       assert.equal(phoneBills.bills(), 0.75);
   });

   it('should return 0 when the string entered in the text box is not call or sms and calculate button is clicked' , function(){
    var phoneBills = calculateBill(); 
   assert.equal(phoneBills.bills(), 0.00);
});
it('should return orange when warning level is reached ' , function(){
    var phoneBills = calculateBill();
    
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")

   assert.equal(phoneBills.danger   (), 'orange');
});
it('should return red when critical level is reached' , function(){
    var phoneBills = calculateBill();

    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("sms")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")
    phoneBills.billsTotal("call")

   assert.equal(phoneBills.danger(), "red");
});

it('should  return the total bill cost in red if the amount has exceeded 30 ' , function(){
    var instanceColour = calculateBill();
  
  
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call"); 
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");
    instanceColour.billsTotal("call");

   assert.equal(instanceColour.danger(), "red");
});
it('should return the cost for 20 calls made' , function(){
    var instanceForCalls = calculateBill();
    
    
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    instanceForCalls.billsTotal("call");
    
    
    instanceForCalls.billsTotal("call");
   assert.equal(instanceForCalls.bills(),55.00);
});
it('should return the total cost in orange if the bill total is 20' , function(){
var instance = calculateBill();


    instance.billsTotal("call");
    instance.billsTotal("sms");
    instance.billsTotal("call");
    instance.billsTotal("sms");
    instance.billsTotal("call");
    instance.billsTotal("sms");
    instance.billsTotal("call");
    instance.billsTotal("sms");
    instance.billsTotal("call");
    instance.billsTotal("sms");
    instance.billsTotal("call")
    instance.billsTotal("sms");

   assert.equal(instance.danger(),"orange");
});

});
