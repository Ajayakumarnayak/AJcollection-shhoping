document.addEventListener("DOMContentLoaded", function() {
    // Define a mapping of names to HTML page URLs
    const nameToPageMap = {
        "tshirt": "tshirt.html",
        "saree": "saree.html",
        "shirt":"shirt.html"
        // Add more name-to-HTML-page mappings as needed
    };

    // Get references to HTML elements
    const searchBox= document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");

    // Add a click event listener to the search button
    searchButton.addEventListener("click", function() {
        const selectedName = searchBox.value;

        if (selectedName in nameToPageMap) {
            // Get the corresponding HTML page URL
            const pageURL = nameToPageMap[selectedName];
            
            // Open the selected HTML page in a new tab/window
            window.open(pageURL, "_blank");
        } else {
            alert("Name not found.");
        }
    });
});
