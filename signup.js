const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');


//  event listerners

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
   const numberValue = number.value.trim();

   
   if(usernameValue === '') {
    setError(username, 'Username is required');
} else {
    setSuccess(username);
}



if(emailValue === '') {
    setError(email, 'email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'provide a valid email address')
} else {
    setSuccess(email);
}

if(numberValue === '') {
    setError(number, 'number is required');
} else if (numberValue.length < 11) {
    setError(number, 'number must be 10 digits')
} else {
    setSuccess(number);
}  

};
