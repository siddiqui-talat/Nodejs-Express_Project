
// Get user with id 2

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => response.json())
  .then(data => console.log(data))

  // Get all users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))


  
  // Create a new user
fetch('https://jsonplaceholder.typicode.com/users', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    username: 'Talat',
    email: 'talat@gmail.com',
  })
})


// Update user with id 3
fetch('https://jsonplaceholder.typicode.com/users/3', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'PUT',
  body: JSON.stringify({
    username: 'talat',
    email: 'talat@gmail.com',
  })
})