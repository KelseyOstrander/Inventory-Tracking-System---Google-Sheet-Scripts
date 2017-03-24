function updateList(){

//IN PROGRESS: STILL NEED TO UPDATE TO IMPROVE EFFICIENCY AND AFTER TESTING AND DEBUGGING
  
  var ss = SpreadsheetApp.getActive();
  var requests = ss.getSheetByName("FormResponses");
  var inventory = ss.getSheetByName("Details");
  
  var requestItems = requests.getRange(2, 1, requests.getMaxRows()-1).getValues(); 
  var inventoryToCheckout = inventory.getRange(2, 1, 17).getValues();
  
  var handled = requests.getRange(2, 7, requests.getMaxRows()-1).getValues() //ALL THE VALUES IN COLUMN G

  
  
  //IF THE REQUESTED ITEM IS ON THE FORM REQUEST SHEET - THEN SET IT TO REQUESTED
  //TODO - ADD CHECK TO SEE IF THERE IS A CHECK IN DATE, IF SO IGNORE BECAUSE THIS REQUEST HAS BEEN HANDLED
  
  //IF THE CURRENT ITEM HAS NOT BEEN CHECKED OUT

      
  //ITERATE THROUGH THE LIST OF REQUESTED ITEMS AND THEIR AVAILABILITY STATUS
  for(var i = 0; i < requestItems.length; i++){
    for (var j = 0; j < inventoryToCheckout.length; j++){
      
      //ONCE FINDING AN ITEM THAT HAS BEEN REQUESTED
      if(requestItems[i][0] == inventoryToCheckout[j][0]){
        
        //DO AN UPDATE OF YOUR LISTS
        setDateatCheckOut();
        handled = requests.getRange(2, 7, requests.getMaxRows()-1).getValues();
        
        //CHECK TO SEE IF IT HAS BEEN HANDLED (CHECK TO SEE IF "ACTUAL CHECK OUT DATE" IN ROW i IS NULL)
        if (handled[i] == ""|| handled[i] == null) {

        //IF IT HAS NOT YET BEEN HANDLED (CHECKED OUT) THEN REQUEST IT
        inventory.getRange('B' +(j+ 2)).setValue('Requested')
        
       
      }}
  }
  
}
}
  
