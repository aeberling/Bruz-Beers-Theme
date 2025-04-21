// Custom JavaScript for Bruz Beers

// Ensure logo is properly sized and positioned when page loads
$(document).ready(function() {
    // Create a clone of the header for sticky navigation
    var $headerArea = $('.header-area');
    var $stickyHeader = $headerArea.clone().addClass('banner--clone').appendTo('body');
    
    // Remove unnecessary elements from sticky header
    $stickyHeader.find('.social-container').remove();
    
    // Adjust only the sticky header logo size
    $stickyHeader.find('.logo img').css({
        'max-height': '60px',
        'width': 'auto',
        'display': 'block',
        'padding': '0 10px',
        'margin': '0'
    });
    
    // Adjust the sticky nav vertical spacing
    $stickyHeader.find('.navigation-container').css({
        'padding': '0',
        'margin': '0',
        'height': 'auto'
    });
    
    $stickyHeader.find('.nav').css({
        'padding': '0',
        'margin': '0'
    });
    
    // Handle scroll events
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $stickyHeader.addClass('banner--stick');
        } else {
            $stickyHeader.removeClass('banner--stick');
        }
    });
    
    // Mobile menu adjustments
    $('.navbar-toggle').on('click', function() {
        if ($(this).hasClass('collapsed')) {
            $(this).removeClass('collapsed');
        } else {
            $(this).addClass('collapsed');
        }
    });
}); 