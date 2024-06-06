
const fn = document.getElementById("fn");
const pass = document.getElementById("pass");
const cp = document.getElementById("cp");
const phone = document.getElementById("phone");


function validateForm() {
    if (fn.value == "" || pass.value == "" || cp.value == "" || phone.value == "") {
        alert(`All fields are mandatory`);
        return false;
    }else if(isNaN(phone.value)){
        alert("only numbers are allowed!!");
        return false;
    }else if(phone.value.length !== 10){
        alert("Phone number should have 10 digits!");
        return false;
    }else if(pass.value !== cp.value){
        alert("Please enter same password");
        return false;
    }else{
        return true;
    }

}