//add a new row to the table when clicking "Submit" on the form.

let id = 0;

document.getElementById("add").addEventListener("click", () => {                            //adds event listener tied to click of the "add" button
    let table = document.getElementById("make-appointment");                                //identifies the table as the "make-appointment" table from index.html
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("name").value;                    //inserts the value of "name" into the table
    row.insertCell(1).innerHTML = document.getElementById("appointment-date").value;        //inserts the value of "appointment-date" into the table
    row.insertCell(2).innerHTML = document.getElementById("appointment-time").value;
    row.insertCell(3).innerHTML = document.getElementById("appointment-reason").value;

    let actions = row.insertCell(4);                                                        //creates a "delete" button as a child class of "appointment-reason"
    actions.appendChild(createDeleteButton(id++));
    document.getElementById("appointment-reason").value = "";
});

function createDeleteButton(id) {                                                           //creates delete button function
    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = id;
    button.innerHTML = "Delete";
    button.onclick = () => {                                                                //sets the delete function to execute on click
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return button;
}