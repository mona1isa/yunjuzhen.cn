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

    $(".click-test").click(function() {
        if($(".test").css("display")=="none"){
            $(".test").show(1500);
        }else {
            $(".test").hide("slow");
        }
    });
    $(".click-java").click(function() {
        if($(".java").css("display")=="none"){
            $(".java").show(1500);
        }else {
            $(".java").hide("slow");
        }
    });
    $(".click-bigdata").click(function() {
        if($(".bigdata").css("display")=="none"){
            $(".bigdata").show(1500);
        }else {
            $(".bigdata").hide("slow");
        }
    });
    $(".click-business").click(function() {
        if($(".business").css("display")=="none"){
            $(".business").show(1500);
        }else {
            $(".business").hide("slow");
        }
    });
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
