// Custom JavaScript for Bruz Beers

// Ensure logo is properly sized and positioned when page loads
$(document).ready(function() {
    // Set hero height to fixed value
    var fixedHeight = 450;
    
    // Force hero height to fixed value
    $('#hero, #hero .carousel-inner, #hero .carousel-inner .item').css({
        'height': fixedHeight + 'px',
        'min-height': fixedHeight + 'px',
        'max-height': fixedHeight + 'px'
    });
    
    // Override height setting attempts
    var originalCss = $.fn.css;
    $.fn.css = function() {
        if (this.is('#hero, #hero .carousel-inner, #hero .carousel-inner .item') && 
            arguments[0] === 'height' || 
            (arguments[0] && (arguments[0].height || arguments[0].minHeight || arguments[0].maxHeight))) {
            
            // Force our height for these elements
            var result = originalCss.apply(this, arguments);
            
            // Reset height after any attempt to change it
            setTimeout(function() {
                $('#hero, #hero .carousel-inner, #hero .carousel-inner .item').css({
                    'height': fixedHeight + 'px',
                    'min-height': fixedHeight + 'px',
                    'max-height': fixedHeight + 'px'
                });
            }, 0);
            
            return result;
        }
        
        // Normal behavior for other elements
        return originalCss.apply(this, arguments);
    };
    
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
    
    // Additional protection against height changes - reapply height on window resize
    $(window).on('resize', function() {
        $('#hero, #hero .carousel-inner, #hero .carousel-inner .item').css({
            'height': fixedHeight + 'px',
            'min-height': fixedHeight + 'px',
            'max-height': fixedHeight + 'px'
        });
    });
}); 