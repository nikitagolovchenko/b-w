$(function() {
    let navToggle = $("#navToggle");
    let nav = $("#nav");



    navToggle.on("click", function(event) {
        event.preventDefault();
        
        navToggle.toggleClass("active");

        if(navToggle.hasClass("active")) {
            nav.slideDown(300);
        } else {
            nav.slideUp(300);
        }
    });
    

    $("[data-link]").on("click", function(event) {  
		event.preventDefault(); 

		var $this = $(this),  
			blockId = $this.data("link"), 
			blockOffset = $(blockId).offset().top;  

        navToggle.removeClass("active");  
        nav.slideUp(300);

		$("html, body").animate({   
			scrollTop: blockOffset
		}, 500);  
	});



})