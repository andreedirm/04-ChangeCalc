$(document).ready
 (
  function()
  {
    window.change = function()
    {
      
  
      var difference = $("#amountPaid").val() - $("#amountDue").val();
      var cents = difference * 100;
      var dollars = 0, quarters = 0, dimes = 0, nickels = 0, pennies = 0;
      
      dollars = Math.trunc(cents/ 100);
      cents = cents % 100;
 
      quarters = Math.trunc(cents / 25);
      cents = cents % 25;
     
      dimes = Math.trunc(cents / 10);
      cents = cents % 10;
    
      nickels = Math.trunc(cents / 5);
      cents = cents % 5;
    
      pennies = Math.round(cents * 100)/ 100;
      
      $("#dollars").text(dollars);
      $("#quarters").text(quarters);
      $("#dimes").text(dimes);
      $("#nickels").text(nickels);
      $("#pennies").text(pennies);
 
  
  
  
  
  
  
    }
   });