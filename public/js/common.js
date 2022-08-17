// menu
$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

// header
$(window).on("resize scroll", function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("active");
    }else {
        $(".header").removeClass("active");
    }
})