function addAllColumnHeaders(myList) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < myList.length; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $("#jsonTable").append(headerTr$);

    return columnSet;
}

$.getJSON("person.json", function (data) {
    var columns = addAllColumnHeaders(data);

   
    for (var i = 0; i < data.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = data[i][columns[colIndex]];
                    
                 
                           
            if (columns[colIndex] === 'address'){
             address=cellValue['streetAddress'] + cellValue['city'] + cellValue['state'] + cellValue['postalCode']
             row$.append($('<td/>').html(address));
                   
			     
 			}   


            if (columns[colIndex] === 'phoneNumber'){
              for (number in cellValue){
              number =  cellValue[number]['type'] + ":" + cellValue[number]['number']  
              
              row$.append($('<tr/>').html(number));
                            }
                   
			     
 			} 
 			

 			
           
            if (cellValue == null) { cellValue = ""; }
             if (columns[colIndex] !== 'address' && columns[colIndex] !== 'phoneNumber'){
             row$.append($('<td/>').html(cellValue));
         }

        }
        $("#jsonTable").append(row$);
    }
});

document.onclick = function(){
  alert ("You clicked somewhere")
}