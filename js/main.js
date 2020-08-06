let validateData = e => {
    e.preventDefault();

    let formControl = document.querySelectorAll(".form-control");
    let alert = document.querySelector("#alert");
    let error = [];
    let nonMandatory = ["inputTextarea"];

    let btnCancel = document.querySelector(".btn-secondary");

    btnCancel.addEventListener("click", () => {
        formControl.forEach(element => {
            element.classList.remove("alert-danger");
            alert.classList.add("d-none");
        })
    });

    formControl.forEach(element => {
        if (element.value === '' && nonMandatory.indexOf(element.id) === -1) {
            element.classList.add("alert-danger");
            error.push(formControl[element]);
        } else {
            element.classList.remove("alert-danger");
        }
    });

    if (error.length > 0) {
        alert.classList.remove("d-none");
    } else {
        alert.classList.add("d-none");
    }

};


let form = document.querySelector("form");
form.addEventListener("submit", validateData);
