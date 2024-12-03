// script.js
function checkPasswordStrength() {
  const password = document.getElementById('password').value;
  const strengthMessage = document.getElementById('strengthMessage');
  const securityMessage = document.getElementById('securityMessage');

  let strength = 0;
  let strengthText = '';
  let securityText = '';

  // Check for length
  if (password.length >= 8) {
    strength += 1;
  }

  // Check for numbers
  if (/\d/.test(password)) {
    strength += 1;
  }

  // Check for special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength += 1;
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    strength += 1;
  }

  // Determine the strength level
  switch (strength) {
    case 0:
    case 1:
      strengthText = 'Weak';
      strengthMessage.className = 'weak';
      securityText = 'This password is highly crackable. Consider using a mix of uppercase, lowercase, numbers, and special characters.';
      securityMessage.className = 'crackable';
      break;
    case 2:
      strengthText = 'Medium';
      strengthMessage.className = 'medium';
      securityText = 'This password is somewhat secure, but could be improved for better protection.';
      securityMessage.className = 'crackable';
      break;
    case 3:
    case 4:
      strengthText = 'Strong';
      strengthMessage.className = 'strong';
      securityText = 'This password is strong and secure. Keep it safe!';
      securityMessage.className = 'strong';
      break;
    default:
      strengthText = '';
      securityText = '';
      break;
  }

  // Display the strength message
  strengthMessage.textContent = `Strength: ${strengthText}`;
  securityMessage.textContent = securityText;
}

// Function to reset the password input and messages
function resetPassword() {
  document.getElementById('password').value = ''; // Clear the password field
  document.getElementById('strengthMessage').textContent = ''; // Clear the strength message
  document.getElementById('securityMessage').textContent = ''; // Clear the security message
  document.getElementById('strengthMessage').className = ''; // Remove message styling
  document.getElementById('securityMessage').className = ''; // Remove message styling
}
