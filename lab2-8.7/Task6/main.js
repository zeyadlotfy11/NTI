const numberInput = document.getElementById('numberInput');
const status = document.getElementById('status');

numberInput.addEventListener('keydown', function (event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
        status.textContent = "Only numbers allowed!";
        status.style.color = "red";
    }
});

numberInput.addEventListener('keyup', function (event) {
    if (this.value === '') {
        status.textContent = "Ready for numbers";
        status.style.color = "black";
    } else {
        status.textContent = "Value: " + this.value;
        status.style.color = "green";
    }
});