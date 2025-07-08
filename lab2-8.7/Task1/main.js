const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const resetBtn = document.getElementById('resetBtn');
const successMessage = document.getElementById('successMessage');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    successMessage.style.display = 'none';
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    }
    else if (nameInput.value.trim().length < 2) {
        nameInput.classList.add('error');
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.style.display = 'block';
        isValid = false;
    }
    else if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
        nameInput.classList.add('error');
        nameError.textContent = 'Name must contain only letters and spaces';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameInput.classList.remove('error');
        nameError.style.display = 'none';
    }

    const ageValue = parseInt(ageInput.value);
    if (ageInput.value.trim() === '') {
        ageInput.classList.add('error');
        ageError.textContent = 'Age is required';
        ageError.style.display = 'block';
        isValid = false;
    }
    else if (isNaN(ageValue) || ageValue < 1 || ageValue > 100) {
        ageInput.classList.add('error');
        ageError.textContent = 'Age must be a number between 1 and 100';
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageInput.classList.remove('error');
        ageError.style.display = 'none';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
    }


    if (isValid) {
        successMessage.style.display = 'block';
    } else {
        const firstErrorField = form.querySelector('.error');
        if (firstErrorField) {
            firstErrorField.focus();
        }
    }
});

resetBtn.addEventListener('click', function () {
    form.reset();
    nameInput.classList.remove('error');
    nameError.style.display = 'none';
    ageInput.classList.remove('error');
    ageError.style.display = 'none';
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
    successMessage.style.display = 'none';

    nameInput.focus();
});

nameInput.focus();