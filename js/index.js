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

	   $('.contentUpdate').click(function () {
           var newClass =$(this).attr('href').substring(1);
            var newContent = $('.'+newClass).html();
            $('#content').html(newContent);
       });

});
d = new Date();
document.querySelector(".mediaDate").innerHTML = d.toUTCString();
