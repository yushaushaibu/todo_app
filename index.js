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

// validates the input field & dismiss modal
function formValidation() {
    if (textInput.value === "") {
        msg.innerHTML = "Task cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
}

// collect and store user inputs to localStorage
const data = [];

function acceptData() {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value,
    })

    localStorage.setItem("data", JSON.stringify(data));

    createTasks();
};

//to create task, template literals is used to create the HTML elements, and a map is used to push the data collected from the user inside the template. 
function createTasks() {
    tasks.innerHTML = "";
    data.map((data, idx) => {
        return (tasks.innerHTML += `
                <div id=${idx}>
                    <span class="fw-bold">${data.text}</span>
                    <span class="small text-secondary">${data.date}</span>
                    <p>${data.description}</p>

                    <span class="options">
                        <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                        <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
                    </span>
                </div>
        `);
    });

    resetForm();
};


function resetForm() {
    textInput.value = "";
    dateInput.value = "";
    textArea.value = "";
};