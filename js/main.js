$(function() {
    let navToggle = $("#navToggle");
    let nav = $("#nav");
    let navInner = $("#navInner");
    let scrollDown = $("#scrollDown");

    // бургер-меню и панель навигации
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        navToggle.toggleClass("active");

        if(navToggle.hasClass("active")) {
            nav.show();
            navInner.slideDown(300);
        } else {
            nav.hide();
            navInner.slideUp(300);
        }

        nav.on("click", function(event) {
            event.preventDefault();
    
            navToggle.removeClass("active");
            navInner.slideUp(300);
            nav.hide();
        })
    });
    
    // скролл к элементам и удаление active
    $("[data-link]").on("click", function(event) {  
		event.preventDefault(); 

		var $this = $(this),  
			blockId = $this.data("link"), 
			blockOffset = $(blockId).offset().top;  

        navToggle.removeClass("active");  
        if(navToggle.hasClass("active")) {
            navInner.slideUp(300);
            nav.hide();
        }

		$("html, body").animate({   
			scrollTop: blockOffset
        }, 500);  
    });
    

    // кнопка скролл-вниз
    scrollDown.on('click', function() {

		$('html, body').animate({
            scrollTop: $(window).height(),
        }, 1000);
	})
    

});