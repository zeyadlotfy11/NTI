// *************** Task 4 ***************
// Write a script that reads from the user his info; validates and 
// displays it with a welcoming message.(name,phone,email,)

let name, phone, email;
while (true) {
    name = prompt("Name:");
    if (!name || name.trim() === "") {
        alert("Name is required and cannot be empty.");
    } else if (name.length <= 2) {
        alert("Name must be more than 2 letters.");
    } else if (/\d/.test(name)) {
        alert("Name cannot contain numbers.");
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name must contain only letters and spaces.");
    } else {
        break;
    }
}

while (true) {
    phone = prompt("Phone number:");
    if (!phone) {
        alert("Phone number is required.");
    } else if (!/^\d{11}$/.test(phone)) {
        alert("Phone number must be exactly 11 digits and contain only numbers.");
    } else {
        break;
    }
}

while (true) {
    email = prompt("Email:");
    if (!email) {
        alert("Email is required.");
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        alert("Email is not valid.");
    } else {
        break;
    }
}

alert(`Welcome ${name}!\n Phone: ${phone}\n Email: ${email}`);
