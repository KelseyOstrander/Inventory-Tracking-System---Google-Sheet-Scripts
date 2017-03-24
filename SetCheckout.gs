//IN PROGRESS: STILL NEED TO UPDATE FOR EFFICIENCEY/TEST/DEBUG

function setDateatCheckOut(){

  
  var ss = SpreadsheetApp.getActive();
  var requests = ss.getSheetByName("FormResponses");
  var inventory = ss.getSheetByName("Details");
  var handled = requests.getRange(2, 7, 25).getValues() //ALL THE VALUES IN COLUMN H //TODO: adjust this so that it goes through all populated
  var available = inventory.getRange(2, 2, 17).getValues() //ALL THE VALUES IN COLUMN B that you can request
  var itemRequested; 
  var itemStatus;
  var timeStamp;

  
  for(var i = 0; i < handled.length; i++) 
  {   
          
    
    //WHAT ITEM HAS BEEN REQUESTED     
    itemRequested = requests.getRange(i+2, 1).getValue();       
      for (var j = 2; j < available.length; j++)
      {
        
        //LOOK UP THAT ITEM IN THE LIST OF ITEM STATUSES
        itemStatus = inventory.getRange(j, 1).getValue();
     
        //WHEN YOU FIND IT, CHECK TO SEE IF IT IS CHECKED OUT
        
        if (itemStatus == itemRequested)
        {
           if (available[j-2] == "Check out") 
          { 
            
            //IF IT IS CHECKED OUT, CHECK TO SEE IF IT HAS ALREADY BEEN HANDLED
             if (handled[i] == ""|| handled[i] == null) 
       
             {
               //IF IT HAS NOT BEEN HANDLED, HANDLE IT
               handled[i] = "yes"
               
               //SET THE VALUE OF THE CELL TO BE TODAY'S DATE
               timeStamp = new Date();
               requests.getRange(i + 2,7).setValue(timeStamp)
             }
          }
    
        }
      }
  }
}






