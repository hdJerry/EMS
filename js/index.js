$(document).ready(function(){

  $(":text").focus(function(){
    $(this).css({"background-color":"#d60004","color":"#fff"});
   });
   $(":text").blur(function(){
    $(this).css({"background-color":"white","color":"black"});
    });
	  $(".navbar-toggle").hover(function(){
		  $(".navbar-collapse").slideDown("slow");
	  });
	  
	   $(".container").hover(function(){
			$(".navbar-collapse").slideUp("slow");
		});	

});