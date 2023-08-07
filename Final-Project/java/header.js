// Function to include HTML content using AJAX
function includeHTML() {
    // Create a new XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function to handle the response
    xhttp.onreadystatechange = function() {
        // Check if the request is complete and the response is successful
        if (this.readyState == 4 && this.status == 200) {
            // Update the content of the element with ID 'header' with the received HTML
            document.getElementById('header').innerHTML = this.responseText;
        }
    };

    // Open a GET request to retrieve 'header.html'
    xhttp.open('GET', 'header.html', true);

    // Send the request
    xhttp.send();
}

// Call the includeHTML function to include the HTML content
includeHTML();
