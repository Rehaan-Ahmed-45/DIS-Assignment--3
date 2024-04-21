function validateInput(currentInput, nextFieldId) {
    // General validation for the current input field
    if (currentInput.checkValidity()) {
        document.getElementById(nextFieldId).disabled = false; // Enable the next field if the current one is valid
    } else {
        document.getElementById(nextFieldId).disabled = true; // Keep the next field disabled if current one is invalid
        currentInput.focus(); // Focus on the current field to prompt correction
    }
}

function validateForm() {
    var name = document.getElementById('patientName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address').value;
    var brand = document.getElementById('vaccineBrand').value;
    var time = document.getElementById('timeSlot').value;

    // Check individual validity first to trigger HTML5 form validation messages
    if (!name.checkValidity()) {
        name.focus();
        return;
    }
    if (!email.checkValidity()) {
        email.focus();
        return;
    }
    if (!phone.checkValidity()) {
        phone.focus();
        return;
    }
    if (!address) { // Check for empty string on address since it's a text input
        document.getElementById('address').focus();
        alert('Please enter an address.');
        return;
    }
    if (!brand) { // Ensure a brand is selected
        document.getElementById('vaccineBrand').focus();
        alert('Please select a vaccine brand.');
        return;
    }
    if (!time) { // Check for empty string on time
        document.getElementById('timeSlot').focus();
        alert('Please select a time slot.');
        return;
    }

    // If all validations pass
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful for<br>
                        ${name.value}<br>
                        Vaccine: ${brand} at ${time}.`;
}
