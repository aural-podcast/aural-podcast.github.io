

$(document).ready(function(){
var onoff = "off";

setTimeout(function(){
   $('#mydiv').show();// or fade, css display however you'd like.
}, 1000);



$("#close").click(function(){
    $("#mydiv").hide();
  });

  if (window.matchMedia("(max-width: 1200px)").matches)
          {
              // The viewport is less than 768 pixels wide
              $("h1, h2, p, img, a").click(function(){

                var sound = $(this).attr("sound");
                var src = $("#audio").attr("src");

                if (onoff === "off"){

                  if (sound === src){
                      $("#audio")[0].play();
                      onoff = "on";
                      $(this).css('filter','blur(4px)');
                      if($(this).is('img')){
                        $(this).css('filter','blur(4px)');
                      }
                  }
                  else {
                      $("#audio").attr("src", sound);
                      $("#audio")[0].play();
                      onoff = "on";
                      $(this).css('filter','blur(4px)');
                      if($(this).is('img')){
                        $(this).css('filter','blur(4px)');
                      }
                  }

                } else{

                  if (sound === src){
                      $("#audio")[0].pause();
                      onoff = "off";
                      $(this).css('filter','none');
                      if($(this).is('img')){
                        $(this).css('filter','none');
                      }
                  }
                  else {
                      $("#audio").attr("src", sound);
                      $("#audio")[0].play();
                      $("h1, h2, p, img, a").css('filter','none');
                      $(this).css('filter','blur(4px)');
                      if($(this).is('img')){
                        $(this).css('filter','blur(4px)');
                      }
                  }

                }

              });

          } else {
              // The viewport is at least 768 pixels wide

                $("h1, h2, p, img, a").mouseover(function(){

                	var sound = $(this).attr("sound");
              	var src = $("#audio").attr("src");

                  if (onoff === "off"){
                    if (sound === src){
                        $("#audio")[0].play();
                        $(this).css('filter','blur(4px)');
                        if($(this).is('img')){
              			$(this).css('filter','blur(4px)');
                        }
                    }
                    else {
                        $("#audio").attr("src", sound);
                        $("#audio")[0].play();
                        $(this).css('filter','blur(4px)');
                        if($(this).is('img')){
              			$(this).css('filter','blur(4px)');
                        }
                    }
                  }
                  else{
                  }

                });

                $("h1, h2, p, img, a").mouseout(function(){

                  if (onoff === "off"){
                  	$("#audio")[0].pause();
                       $(this).css('filter','none');
                        if($(this).is('img')){
              			$(this).css('filter','none');
                        }
                  }
                  else{
                  }

                });

                $("h1, h2, p, img, a").click(function(){

                  var sound = $(this).attr("sound");
                	var src = $("#audio").attr("src");

                  if (onoff === "off"){

                  	if (sound === src){
                        $("#audio")[0].play();
                        onoff = "on";
                        $(this).css('filter','blur(4px)');
                        if($(this).is('img')){
                          $(this).css('filter','blur(4px)');
                        }
                    }
                    else {
                        $("#audio").attr("src", sound);
                        $("#audio")[0].play();
                        onoff = "on";
                        $(this).css('filter','blur(4px)');
                        if($(this).is('img')){
                          $(this).css('filter','blur(4px)');
                        }
                    }

                  } else{

                  	if (sound === src){
                        $("#audio")[0].pause();
                        onoff = "off";
                        $(this).css('filter','none');
                        if($(this).is('img')){
                          $(this).css('filter','none');
                        }
                    }
                    else {
                        $("#audio").attr("src", sound);
                        $("#audio")[0].play();
                        $("h1, h2, p, img, a").css('filter','none');
                        $(this).css('filter','blur(4px)');
                        if($(this).is('img')){
                          $(this).css('filter','blur(4px)');
                        }
                    }

                  }

                });

          }


});
