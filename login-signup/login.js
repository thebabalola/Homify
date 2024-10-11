const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');
const confirmPasswordGroup = document.getElementById('confirm-password-group');
const toggleText = document.getElementById('toggle-text');
const toggleLink = document.getElementById('toggle-link');
const submitBtn = document.querySelector('.submit-btn');

let isSignUp = false;

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isSignUp = !isSignUp;
  if (isSignUp) {
    formTitle.textContent = 'Sign Up';
    confirmPasswordGroup.classList.remove('hidden');
    submitBtn.textContent = 'Sign Up';
    toggleLink.textContent = 'Log in';
    toggleText.firstChild.textContent = "Already have an account? ";
  } else {
    formTitle.textContent = 'Login';
    confirmPasswordGroup.classList.add('hidden');
    submitBtn.textContent = 'Login';
    toggleLink.textContent = 'Sign up';
    toggleText.firstChild.textContent = "Don't have an account? ";
  }
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isSignUp) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password === confirmPassword) {
      alert('Sign-up successful!');
    } else {
      alert('Passwords do not match.');
    }
  } else {
    alert('Login successful!');
  }
});
