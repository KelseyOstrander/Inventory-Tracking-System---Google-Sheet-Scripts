//TODO: TEST/DEBUG/IMPROVE EFFICIENCY

function setDateatCheckIn(){
  
  var ss = SpreadsheetApp.getActive();
  var requests = ss.getSheetByName("FormResponses");
  var inventory = ss.getSheetByName("Details");
  var checkedOut = requests.getRange(2, 7, requests.getMaxRows()-1).getValues() //ALL THE VALUES IN COLUMN G 
  var available = inventory.getRange(2, 2, 17).getValues() //ALL THE VALUES IN COLUMN B
  var itemRequested; 
  var itemStatus;
  var handled = [];
  var timeStamp;
  var checkInStatus; 
  
  
  for(var i = 0; i < checkedOut.length; i++) 
  {   
    
    //IF THE CURRENT ITEM HAS BEEN CHECKED OUT (NOTE THIS IS THE SAME LIST AS THE "HANDLED" LIST
    if (checkedOut[i] != "") 
       
    {
           
      //LOOK UP THE NAME OF THE ITEM THAT HAS BEEN REQUESTED
      itemRequested = requests.getRange(i+2, 1).getValue(); 
      
      //FIND THE CORRESPONDING ITEM TO CHECK ITS CURRENT STATUS
      for (var j = 2; j < available.length; j++){
        itemStatus = inventory.getRange(j, 1).getValue();
     
        if (itemStatus == itemRequested)
        {
      
       
          //IF THE REQUESTED ITEM HAS BEEN CHECKED BACK IN
          if (available[j-2] == "Check in") 
          { 
            
            //IF THE CHECK IN HAS NOT ALREADY BEEN RECORDED, THEN UPDATE IT.
            checkInStatus = requests.getRange(i + 2,8).getValue();
            
            if (checkInStatus == ""  || checkInStatus == null){
            //THEN UPDATE THE DATE THAT IT WAS CHECKED IN
            timeStamp = new Date();
            requests.getRange(i + 2,8).setValue(timeStamp)
            }
          }
   
        }
    
      }
    }
  }
}
 

