var submit = document.querySelector('#submit');

var names = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

submit.addEventListener('submit', checkGuide);

function checkGuide(){
    var nameValue = names.value;
    var validName = nameValue.match(/^[A-Za-z]{1,20} [A-Za-z]{1,30}$/);
    var nameValid = validName ? "true" : "false";
    if(nameValid === "false"){
        document.getElementById('reqName').innerHTML = `Name is Invalid.`;
    }

    var emailValue = email.value;
    var validEmail = emailValue.match(/^\w{1,}\@\D{1,}\.\D{3}$/);
    var emailValid = validEmail ? "true" : "false";
    if(emailValid === "false"){
        document.getElementById('reqEmail').innerHTML = `Email is Invalid.`;
    }

    var messageValue = message.value;
    var validMessage = messageValue.match(/^\w{1,}$/);
    var messageValid = validMessage ? "true" : "false";
    if(messageValid === "false"){
        document.getElementById('reqMessage').innerHTML = `Message is Invalid.`;
    }

    if(nameValid === "true" && emailValid === "true" && messageValid === "true"){
        console.log("Form Submitted.");
    }
}