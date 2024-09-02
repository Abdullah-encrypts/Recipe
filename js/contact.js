// Get the form element
const form = document.querySelector('#myForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  // Get the error elements
  const nameError = document.querySelector('#nameError');
  const emailError = document.querySelector('#emailError');
  const messageError = document.querySelector('#messageError');

  // Reset previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  // Validate the name input
  if (nameInput.value.trim() === '') {
    nameError.textContent = '* Name is required';
    nameError.classList.add('color', 'color-red')
    nameInput.classList.add('border', 'border-red-500');
  } else {
    nameInput.classList.remove('border', 'border-red-500');
  }

  // Validate the email input
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = '* Email is required';
    emailInput.classList.add('border', 'border-red-500');
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email';
    emailInput.classList.add('border', 'border-red-500');
  } else {
    emailInput.classList.remove('border', 'border-red-500');
  }

  // Validate the message input
  if (messageInput.value.trim() === '') {
    messageError.textContent = '* Message is required';
    messageInput.classList.add('border', 'border-red-500');
  } else {
    messageInput.classList.remove('border', 'border-red-500');
  }

  // If there are no errors, submit the form
  if (nameError.textContent === '' && emailError.textContent === '' && messageError.textContent === '') {
    form.submit();
  }
});
