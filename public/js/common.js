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

// menu
var swiper = new Swiper(".home-menu_slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    speed:800,
    loop: true,
    navigation: {
        nextEl: ".home-menu_slider_next",
        prevEl: ".home-menu_slider_prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2.5,
        }
    }
})