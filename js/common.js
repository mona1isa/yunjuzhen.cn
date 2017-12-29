$(document).ready(function() {
    $(window).resize(function () {
        if (($("#header").width())>768) {
            $('#header').addClass("navbar-index");
            $('#header').removeClass("navbar-inverse");
        } else {
            $('#header').addClass("navbar-inverse");
            $('#header').removeClass("navbar-index");
        }
    })

    $(window).scroll(function() {
        var scrollTop  = $(window).scrollTop()
        if (scrollTop > 65) {
            console.log(scrollTop);
            $('#header').addClass("navbar-inverse");
        } else {
            $('#header').removeClass("navbar-inverse");
        }
    });

})