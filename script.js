// JavaScript code  
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

// Submit form handler
$("#contactForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    // Here you can perform additional validation or send the form data to a server using AJAX
    // For demonstration purposes, we'll simply display an alert with the submitted data
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    // Reset the form fields
    $("#contactForm")[0].reset();
  });
});