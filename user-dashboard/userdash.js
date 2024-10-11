// Simulating user data
const userData = {
	name: 'John Doe',
	role: 'Seller',
	properties: [
	  { id: 1, location: 'Lagos', price: '$500,000', description: '3-bedroom house', status: 'Available' },
	  { id: 2, location: 'Abuja', price: '$300,000', description: '2-bedroom apartment', status: 'Sold' }
	],
	transactions: [
	  { id: 1, property: 'Lagos', amount: '$500,000', date: '2024-10-01', status: 'Completed' }
	],
	notifications: [
	  { id: 1, message: 'Property inquiry for Lagos house' },
	  { id: 2, message: 'Transaction completed for Abuja apartment' }
	]
  };
  
  // Display user data dynamically
  function loadDashboard() {
	// Update user overview
	document.getElementById('user-name').textContent = userData.name;
	document.getElementById('user-role').textContent = userData.role;
  
	// Update properties
	const propertiesContainer = document.getElementById('properties-container');
	userData.properties.forEach(property => {
	  const propertyDiv = document.createElement('div');
	  propertyDiv.innerHTML = `
		<p>${property.description} - ${property.location} (${property.price})</p>
		<p>Status: ${property.status}</p>
	  `;
	  propertiesContainer.appendChild(propertyDiv);
	});
  
	// Update transactions
	const transactionsContainer = document.getElementById('transactions-container');
	userData.transactions.forEach(transaction => {
	  const transactionDiv = document.createElement('div');
	  transactionDiv.innerHTML = `
		<p>Property: ${transaction.property}</p>
		<p>Amount: ${transaction.amount}</p>
		<p>Status: ${transaction.status}</p>
	  `;
	  transactionsContainer.appendChild(transactionDiv);
	});
  
	// Update notifications
	const notificationsList = document.getElementById('notifications-list');
	userData.notifications.forEach(notification => {
	  const notificationItem = document.createElement('li');
	  notificationItem.textContent = notification.message;
	  notificationsList.appendChild(notificationItem);
	});
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', loadDashboard);
  