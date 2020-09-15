function  hoverEffect() {
    $(".item").mouseenter(function(){
        $(this).addClass("hover")
    }).mouseleave(function(){
        $(this).removeClass("hover")
    });
} hoverEffect();

