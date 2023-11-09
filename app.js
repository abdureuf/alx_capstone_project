// Select the form element
var form = document.getElementById('contact-form');

// Add event listener to the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Perform validation checks
  var nameInput = document.querySelector('input[name="Name"]');
  var emailInput = document.querySelector('input[name="Email"]');
  var messageInput = document.querySelector('textarea[name="Message"]');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  // Validate the name input
  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate the email input
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '') {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  } else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate the message input
  if (message === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }

  // If all validation checks pass, submit the form
  form.submit();
});