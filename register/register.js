document.getElementById('registerForm').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevents the default form submission
  
	// Extract form values
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const role = document.getElementById('role').value;
  
	// Simulate dynamic behavior (e.g., form validation or sending data to the server)
	alert(`Welcome ${name}! You've registered as a ${role}.`);
  
	// Here you can add logic to send data to the server
	// Example: Using fetch to send a POST request to an API endpoint
	/*
	fetch('/api/register', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ name, email, password, role })
	})
	.then(response => response.json())
	.then(data => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});
	*/
  });
  