$(document).ready(function () {
	$('input').change(function(event) {
		$(this).parent().find('img').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).parent().find('audio').attr("src", URL.createObjectURL(event.target.files[0])); 
	});
   
    
  $('a').click(function () {
       $(this).parent().find('input').val('');
       $(this).parent().find('img').attr("src", " "); 
       $(this).parent().find('audio').attr("src", "");  
	}) 
});
