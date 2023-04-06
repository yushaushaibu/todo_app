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

// validates the input field ~ user cannot submit blank input field
function formValidation() {
    if (textInput.value === "") {
        msg.innerHTML = "Task cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData();
    }
}

// collect and store user inputs in localStorage
const data = [];

function acceptData() {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value,
    })

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data)
};