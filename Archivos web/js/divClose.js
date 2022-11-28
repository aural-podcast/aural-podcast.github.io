$(document).ready(function(){
var onoff = "off";

  setTimeout(function(){
   $('#mydiv').show();// or fade, css display however you'd like.
  }, 1000);



  $("#close").click(function(){
    $("#mydiv").hide();
  });

  
});
