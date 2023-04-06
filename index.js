const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textArea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const add = document.getElementById("add");
const tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

function formValidation() {
    if (textInput.value === "") {
        msg.innerHTML = "Task cannot be blank";
        console.log("failure")
    } else {
        msg.innerHTML = "";
        console.log("success")
    }
}