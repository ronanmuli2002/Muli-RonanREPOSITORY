// Smooth scrolling for navigation links
$(document).ready(function(){
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
    
    // Contact form submission
    $("#contactForm").submit(function(event){
        event.preventDefault();
        
        // Get form values
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        
        // Simple validation
        if(name && email && subject && message) {
            // In a real application, you would send this data to a server
            $("#formResponse")
                .removeClass("alert-danger")
                .addClass("alert-success")
                .text("Thank you for your message! We will get back to you soon.")
                .fadeIn();
            
            // Clear the form
            $("#contactForm")[0].reset();
            
            // Hide the response after 5 seconds
            setTimeout(function(){
                $("#formResponse").fadeOut();
            }, 5000);
        } else {
            $("#formResponse")
                .removeClass("alert-success")
                .addClass("alert-danger")
                .text("Please fill in all fields.")
                .fadeIn();
        }
    });
    
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Initialize popovers
    $('[data-toggle="popover"]').popover();
});