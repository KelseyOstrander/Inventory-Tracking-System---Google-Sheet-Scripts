//TODO: TEST/DEBUG/IMPROVE EFFICIENCY

function updateForm(){
  //THIS FUNCTION UPDATES THE DROP DOWN LIST ON THE GOOGLE FORM TO REFLECT ONLY THE COMPUTERS AVAILABLE TO CHECK OUT
 
  
  // call your form and connect to the drop-down item
  var form = FormApp.openById("1bzQeIKjduyZY5oaBn5StpV42GweuEgVONa1i_OBxc38");
   
  var checkedInComps = form.getItemById("1382706805").asListItem();

  // identify the sheet where the data resides needed to populate the drop-down: DETAILS
  var ss = SpreadsheetApp.getActive();
  var names = ss.getSheetByName("Details");

  // grab the values in the first column of the sheet - use 2 to skip header row 
  //THIS IS THE LIST THAT SHOWS UP IN DROP DOWN MENU
  
  var checkedOutComps = names.getRange(2, 1, names.getMaxRows() - 1).getValues();
  var Availability = names.getRange(2, 2, names.getMaxRows() - 1).getValues();
  var toTransfer = [];
  var j = 0; 
  
  //ADD IN AN IF STATEMENT
  //IF THE B COLUMN OF THE SAME ROW != "Check In" THEN TAKE IT OFF THE CHECKED OUT COMPUTERS LIST 

  // convert the array ignoring empty cells
  for(var i = 0; i < checkedOutComps.length; i++)    
    if(checkedOutComps[i][0] != ""){
      if(Availability[i][0] == "Check in"){
        toTransfer[j] = checkedOutComps[i];
  j++; 
      }}

  // populate the drop-down with the array data
  checkedInComps.setChoiceValues(toTransfer);
  
}
