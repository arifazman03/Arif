
var form = document.getElementById('form');
var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    // Check if the form is valid
    if (form.checkValidity()) {
        alert('Thank you for donating!!!');
    } else {
        alert('Error!!! Fill in the forms to donate.');
    }
});