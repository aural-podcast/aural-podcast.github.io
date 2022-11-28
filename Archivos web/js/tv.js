$(document).ready(function(){
var sino = "no";


				$(".tvLink").mouseover(function(){

                var info = $(this).attr("tv");
								console.log(info);

                  if (sino === "no"){
                        $("#"+info).show();
                  }
                  else{
                  }

                });

        $(".tvLink").mouseout(function(){

         				var info = $(this).attr("tv");

                  if (sino === "no"){
                        $("#"+info).hide();
                  }
                  else{
                  }

                });

       	$(".tvLink").click(function(){

                  var info = $(this).attr("tv");

                  if (sino === "no"){

                  	$("#"+info).show();
                        sino = "si";

                  } else{

                  	if ( $("#"+info).css('display') == 'none' || $("#"+info).css("visibility") == "hidden") {

                    $(".divTV").hide();
                    $("#"+info).show();

                    } else {


                    $(".divTV").hide();
                        sino = "no";

                    }





                  }

                });




});
