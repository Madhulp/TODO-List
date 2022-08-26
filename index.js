document.querySelector("form").addEventListener("submit", createTodo);
function createTodo() {
    event.preventDefault()
    var task = document.querySelector("#task").value;
    var priority = document.getElementById("priority").value;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = task;

    var td2 = document.createElement("td");
    td2.innerText = priority;
    if (priority == "High") {
        td2.style.backgroundColor = "red";
    } else {
        td2.style.backgroundColor = "green";
    }
    var td3 = document.createElement("td");
    td3.innerText = "delete";
    td3.addEventListener("click", deleteRow);

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
}
function deleteRow() {
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}


