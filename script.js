const dataContainer = document.getElementById("data-container");

// Using Promises
function fetchDataWithPromises() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      dataContainer.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
    });
}

// Uncomment the following line to test this approach
// fetchDataWithPromises();

// Using async/await
async function fetchDataWithAsyncAwait() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      dataContainer.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
    }
  }
  
  // Call this function to test this approach
  fetchDataWithAsyncAwait();

  // Function to display data on the web page
function displayData(users) {
    dataContainer.innerHTML = ""; // Clear previous content
    users.forEach(user => {
      const userElement = document.createElement("p");
      userElement.textContent = `Name: ${user.name} - Email: ${user.email}`;
      dataContainer.appendChild(userElement);
    });
  }
  