//jQuery function to house the javascript so nothing runs until all the html loads
$(document).ready(function() {
    var currentTime = dayjs().format('MMM D, YYYY' + " at " + 'h:ss');
    $('#current-time').append(currentTime);
  }
  );

$(function(){
    var projectName = '' ;
    var projectType = '' ;
    var dueDate = '' ;
    
    //TODO: function to assign variables to respective form inputs

    //TODO: Add drop down selector for 'Project Type'

    function renderProject (){
        var tableBody = $('#under-block');
        var lastTableRow = $('#under-block:last-child');
        tableBody.append("<tr>");
        lastTableRow.append('<th scope="row">'+projectName.val()+'</th>');
        lastTableRow.append('<th>'+projectType.val()+'</th>');
        lastTableRow.append('<th>'+dueDate.val()+'</th>');
        lastTableRow.append('<th>'+/*Need to grab X icon for deleting option*/ '</th>');

    }

    //TODO: Add function for deleting the project once done

    $('#submit').on('click',function(event){
        event.preventDefault();
        //TODO: ADD FUNCTION FOR ASSIGNING VARIABLE TO FORM INPUT 
        //

        renderProject ();
    });


});
