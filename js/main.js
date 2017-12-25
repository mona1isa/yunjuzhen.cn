$(document).ready(function() {
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
    $("body").scroll(function() {
        alert($("#index-content").scrollTop());
    })


})
