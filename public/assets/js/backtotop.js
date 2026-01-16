!function(s) {
    "use strict";

    // Theme switcher
    s(".switch").on("click", function() {
        if (s("body").hasClass("light")) {
            s("body").removeClass("light");
            s(".switch").removeClass("switched");
        } else {
            s("body").addClass("light");
            s(".switch").addClass("switched");
        }
    });

    s(document).ready(function() {
        // Scroll progress path
        var e = document.querySelector(".progress-wrap path");
        if (e) { // ✅ check element exists
            var t = e.getTotalLength();

            // Initialize dash array & offset
            e.style.transition = e.style.WebkitTransition = "none";
            e.style.strokeDasharray = t + " " + t;
            e.style.strokeDashoffset = t;

            // Trigger a layout so styles take effect
            e.getBoundingClientRect();
            e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";

            // Update dash offset on scroll
            var updateProgress = function() {
                var scrollTop = s(window).scrollTop(),
                    docHeight = s(document).height() - s(window).height(),
                    offset = t - (scrollTop * t / docHeight);
                e.style.strokeDashoffset = offset;
            };

            updateProgress();
            s(window).scroll(updateProgress);
        }

        // Add active class after scrolling 50px
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > 50) {
                jQuery(".progress-wrap").addClass("active-progress");
            } else {
                jQuery(".progress-wrap").removeClass("active-progress");
            }
        });

        // Scroll to top on click
        jQuery(".progress-wrap").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, 550);
            return false;
        });
    });

}(jQuery);
