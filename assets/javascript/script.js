//jQuery function to house the javascript so nothing runs until all the html loads

$(function () {
    var projectsArray = JSON.parse(localStorage.getItem("projectsArray")) || []
    var projectName = $("#name-input");
    var projectType = $("#select-input");
    var dueDate = $("#due-date");
    var projectForm = $('#project-form')

    //TODO: function to assign variables to respective form inputs

    //TODO: Add drop down selector for 'Project Type'

    function renderProject() {
        var tableBody = $('#under-block');
    tableBody.text("")
        for (let i = 0; i < projectsArray.length; i++) {
            var tableRow = $("<tr>")
            tableBody.append(tableRow);
            tableRow.append('<td scope="row">' + projectsArray[i].projectName + '</td>');
            tableRow.append('<td>' + projectsArray[i].projectType + '</td>');
            tableRow.append('<td>' + projectsArray[i].dueDate + '</td>');
            tableRow.append(`<td class="delete-btn" data-id="${projectsArray[i].id}"> x </td>`);
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
    //TODO: Add function for deleting the project once done\
   
   
    function removeProject(id) {
        var index = -1
        for (let i = 0; i < projectsArray.length; i++) {
            if (projectsArray[i].id == id) {
                index = i
                break
            }
        }
        projectsArray.splice(Number(index), 1)
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray))
        renderProject()
        console.log(id)
    }
    $(document).on("click", ".delete-btn", function (event) {
        var id = $(this).data('id')
        removeProject(id)
    })
    projectForm.on('submit', function (event) {
        event.preventDefault();
        //TODO: ADD FUNCTION FOR ASSIGNING VARIABLE TO FORM INPUT 
        //
        addProject()
        renderProject();
    });
    renderProject()
});