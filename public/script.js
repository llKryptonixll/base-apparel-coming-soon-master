const errors = document.querySelectorAll(".errors");
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", handleClick);

const input = document.getElementById("email-input");
input.addEventListener("input", handleInputChange);

function handleClick() {
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    errors.forEach((error) => {
        if(input.value.match(emailRegEx)){
            error.classList.add("hidden");
            input.classList.remove("border-2", "border-soft_red", "border-opacity-100");
        }
        else{
            error.classList.remove("hidden");
            input.classList.add("border-2", "border-soft_red", "border-opacity-100");
        }
    });
}

function handleInputChange() {
    errors.forEach((error) => {
        error.classList.add("hidden");
        input.classList.remove("border-2", "border-soft_red", "border-opacity-100");
    }); 
}