document.addEventListener('DOMContentLoaded', function() {
    
    tabdata();
});

document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;
    const message = document.getElementById('message');

   
    if (!valage(dob)) {
        message.textContent = "You must be between 18 and 55 years old!";
        message.style.color = "red";
        return;
    }

    if (!terms) {
        message.textContent = "You must accept the terms and conditions!";
        message.style.color = "red";
        return;
    }

    const data = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        termsAccepted: terms
    };

    
   locstorage(data);

  
    addrow(data);

    message.textContent = "Registration successful!";
    message.style.color = "green";

   
    document.getElementById('registration').reset();
});

function valage(dob) {
    const date = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const diff = today.getMonth() - date.getMonth();
    
    
    if (diff< 0 || (diff === 0 && today.getDate() < datee.getDate())) {
        age--;
    }

    return age >= 18 && age <= 55;
}

function locstorage(data) {
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
}

function tabdata() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(addRow);
}

function addrow(data) {
    const userTable = document.getElementById('Table').getElementsByTagName('tbody')[0];
    const newRow = userTable.insertRow();
    newRow.insertCell(0).textContent = data.name;
    newRow.insertCell(1).textContent = data.email;
    newRow.insertCell(2).textContent = data.password;
    newRow.insertCell(3).textContent = data.dob;
    newRow.insertCell(4).textContent = data.termsAccepted ? "Yes" : "No";
}
