const myForm = document.getElementById('my-form');


myForm.addEventListener(
    "submit",
    function (value) {
        value.preventDefault()
        let validationForm = true;
        let userNameError = document.getElementById('userNameError');
        let emailAddressError = document.getElementById('emailAddressError');
        let firstNameError = document.getElementById('firstNameError');
        let lastNameError = document.getElementById('lastNameError');
        let phoneNumberError = document.getElementById('phoneNumberError');

        let valid = userNameValidator();
        if (!valid) {
            userNameError.style.display = 'block';
        } else {
            userNameError.style.display = 'none';
            validationForm = false;
        }

        valid = ValidateEmail();
        if (!valid) {
            emailAddressError.style.display = "block";
        } else {
            emailAddressError.style.display = "none";
            validForm = false;
        }

        valid = validateFirstNames();
        if (!valid) {
            firstNameError.style.display = 'block';
        } else {
            firstNameError.style.display = 'none';
            validationForm = false;
        }

        valid = validateLastNames();
        if (!valid) {
            lastNameError.style.display = 'block';
        } else {
            lastNameError.style.display = 'none';
            validationForm = false;
        }

        valid = validatePhoneNumber();
        if (!valid) {
            phoneNumberError.style.display = 'block';
        } else {
            phoneNumberError.style.display = 'none';
            validationForm = false;
        }
    }, false
);


//userName validator 
const userNameTemplate = /^[a-zA-Z0-9-]*$/;
const userNameValidator = () => {
    const userName = document.getElementById('userName').value;
    let splitUserName = userName.split("");
    if (userName.length > 3 && userNameTemplate.test(userName)) {
        return true;
    }
};


//emailAddress Validator
const emailTemplate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ValidateEmail = () =>{
    let emailAddress = document.getElementById('emailAddress').value;
    if (emailTemplate.test(emailAddress)){
        return true;
    }
};


//FirstName validator
const firstNameTemplate = /^[a-zA-Z-]*$/;
const validateFirstNames =()=>{
    const firstName = document.getElementById('firstName').value;
    if(firstNameTemplate.test(firstName) && firstName.length >3){
        return true;
    }
    return false;
};


//LastName validator
const lasNameTemplate = /^[a-zA-Z-]*$/;
const validateLastNames =()=>{
    const lastName = document.getElementById('lastName').value;
    if(lasNameTemplate.test(lastName) && lastName.length >3){
        return true;
    }
    return false;
};

const validatePhoneNumber = () => {
    const phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber.length == 10) {
        return true;
    }
    return false;
};