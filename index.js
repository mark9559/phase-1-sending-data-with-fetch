// Add your code here

function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name: "Steve", email: "steve@steve.com" })
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
        // Append the new ID to the DOM
        const id = data.id;
        const idElement = document.createElement("p");
        idElement.textContent = id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Append error message to the DOM
        const errorElement = document.createElement("p");
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
  
  submitData("Mark Mwangi", "mwangimarkt@gmail")
  