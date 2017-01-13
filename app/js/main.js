$(document).ready(function(){
	// VARIABLES
	var body 							= $("body"),
			visibility        = "in visible",
			active            = "active",
	 		backdrop = $("<div />", {
				class: "vmodal-backdrop fade"
			});
	// SCROLL TO BLOCK
	$('.anchor').click(function(){
		var href = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $(href).offset().top
		},2000);
		return false;
	});
	
	$('[data-modal="vmodal"]').click(function(){
		var thisTarget = $(this).attr("data-modal-target");
		if ( thisTarget ) {
			$(thisTarget).addClass(visibility);
			body.append(backdrop).addClass("vmodal-open");
			backdrop.addClass(visibility);
		}else{
			console.log("Need attribtue [data-modal-target].");
		}
	});
	$('[data-close="vmodal"]').click(function(){
		$(this).closest(".vmodal").removeClass(visibility);
		backdrop.removeClass(visibility);
		body.removeClass("vmodal-open");
	});
	$(window).click(function(e){
		if ( backdrop.length > 0 ) {
			if ( $(e.target).is(".vmodal") ) {
				$(".vmodal.in").removeClass(visibility);
				backdrop.removeClass(visibility);
				body.removeClass("vmodal-open");
			}
		}
	});
});	