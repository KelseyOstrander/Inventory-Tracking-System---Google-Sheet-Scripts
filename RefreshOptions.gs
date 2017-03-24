function onEdit(){ 
  //EVERYTIME A NEW REQUEST FORM HAS BEEN SUBMITTED THEN UPDATE EVERYTHING
     setDateatCheckOut(); //update FormResponses
     setDateatCheckIn(); //update FormResponses
     updateList(); //update "Details"
     updateForm(); //update google form

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function onOpen() {
    

    //THIS FUNCTION ADDS A MENU BAR TO THE GOOGLE SPREADSHEET TO RUN THE OTHER TWO FUNCTIONS EASILY
   
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    
    name : "Update Request Form with Available Equipment",
    functionName : "updateForm"
  },
                 
    {  
  
    name : "Update Requests Made",
    functionName : "updateList"
    },
                 
     {  
  
    name : "set Actual Check Out Date",
    functionName : "setDateatCheckOut"
    },
                 
                   {  
  
    name : "set Actual Check In Date",
    functionName : "setDateatCheckIn"
    }
                
                
                
                
                
                ];
 sheet.addMenu("Script Center Menu", entries);
    
// ADD THIS TO AUTOMANTICALLY RUNS FUNCTIONS WHENEVER THE PAGE IS REFRESHED
    updateList();
    updateForm();
    setDateatCheckOut();
    setDateatCheckIn();
}
