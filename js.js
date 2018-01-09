jQuery(document).ready(function(){
	
	jQuery("#btn").click(function() { 
									
	jQuery(this).parents(".hidden").fadeOut();




});
	
	
	jQuery(".hidden").hide();
	
	
	
	jQuery("#btn").click(function(){
	
		jQuery(this).next(".hidden").slideToggle(1000);
									
									
									});
	
	
	
	
	
});