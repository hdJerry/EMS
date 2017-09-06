$(":text").focus(function(){
    $(this).css({"background-color":"#d60004","color":"#fff"});
});
$(":text").blur(function(){
    $(this).css({"background-color":"white","color":"black"});
});

function scrolleffect(){
    $("document").scroll(function(){
     $(".navbar").fadeTo("slow",0.75).slideUp("slow");
    });
}
window.addEventListener("scroll",scrolleffect());