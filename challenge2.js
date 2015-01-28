$(document).ready(function() {

	$("form").on("submit", function() {
		var x = $("#hello1").val();
		
		 $("ul").after("<li class='item'>" + x + "<input type='checkbox'/></li>");
		
	});

	// ask elie!!!! wtf is deferal???
	$("body").on("click","input[type=checkbox]", function(){
		
	  $(this).parent().toggle('completed');
	});

});

