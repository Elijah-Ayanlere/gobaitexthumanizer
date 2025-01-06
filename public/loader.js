// loader.js

document.addEventListener("DOMContentLoaded", () => {
    // Fetch the loader component from loader.html
    fetch('loader.html')
      .then(response => response.text())
      .then(html => {
        // Inject the loader HTML into the loader-container
        document.getElementById('loader-container').innerHTML = html;
  
        // Simulate a delay (e.g., 2 seconds) before hiding the loader
        setTimeout(() => {
          // Hide the loader
          document.getElementById('loader').classList.add('hidden');
  
          // Show the main content
          document.getElementById('main-content').classList.remove('hidden');
        }, 2000); // Adjust delay as needed
      })
      .catch(error => {
        console.error('Error loading the loader:', error);
      });
  });
  