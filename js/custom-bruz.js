// Custom JavaScript for Bruz Beers

// Ensure logo is properly sized and positioned when page loads
$(document).ready(function() {
    // Adjust logo size and position
    adjustLogo();
    
    // Adjust logo when window is resized
    $(window).resize(function() {
        adjustLogo();
    });
    
    function adjustLogo() {
        // Make sure logo stays in top left and at proper size
        $('.logo img').css({
            'max-height': '60px',
            'width': 'auto',
            'display': 'block'
        });
    }
}); 