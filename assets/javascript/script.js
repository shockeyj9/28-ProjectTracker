//jQuery function to house the javascript so nothing runs until all the html loads

$(function () {
    var projectsArray = JSON.parse(localStorage.getItem("projectsArray")) || []
    var projectName = $("#name-input");
    var projectType = $("#select-input");
    var dueDate = $("#due-date");

    //TODO: function to assign variables to respective form inputs

    //TODO: Add drop down selector for 'Project Type'

    function renderProject() {
        var tableBody = $('#under-block');
        var lastTableRow = $('#under-block:last-child');
        for (let i = 0; i < projectsArray.length; i++) {
            tableBody.append("<tr>");
            lastTableRow.append('<th scope="row">' + projectsArray[i].projectName + '</th>');
            lastTableRow.append('<th>' + projectsArray[i].projectType + '</th>');
            lastTableRow.append('<th>' + projectsArray[i].dueDate + '</th>');
            lastTableRow.append('<th>' +/*Need to grab X icon for deleting option*/ 'x' + '</th>');
        }


    }
    function addProject() {

        var newProject = {
            id: Math.floor(Math.random() * 1000),
            projectName: projectName.val(),
            projectType: projectType.val(),
            dueDate: dueDate.val()
        }
        projectsArray.push(newProject)
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray))
    }
    //TODO: Add function for deleting the project once done

    $('#project-form').on('submit', function (event) {
        event.preventDefault();
        //TODO: ADD FUNCTION FOR ASSIGNING VARIABLE TO FORM INPUT 
        //
        addProject()
        renderProject();
    });
        renderProject()
});