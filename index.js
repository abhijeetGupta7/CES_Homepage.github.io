// loader
window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  var content = document.getElementById("content");
  
  setTimeout(function() {
    loader.style.display = "none"; // Hide the loader after 0.8 seconds
    content.style.display = "block"; // Show the body content
  }, 800);
});


