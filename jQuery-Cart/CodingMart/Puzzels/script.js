

$(document).ready(function(){
    $('#pipeOF').show();
    $('#pipeOn').hide();
    
    $("#ttop").click(function(){
    $("#ttop").css("backgroundColor","green");
    // $("#ttop").animate(1000);
    
     //$("#ttop").css("display","none");
      //setTimeout(function(){ $("#ttop").css("display","block"); },100);
      $('#pipeOF').hide();
      $('#pipeOn').show();
      $('#pipe').css({"color" : "#4b87bc"})
    $("#white").slideDown(8000);
    $(".f2").slideDown(500);
    $(".f1").fadeOut(5000);
    $("#be").slideUp(8000);
    });

    $("#ttop").mouseenter(function(){
        // $('#pipeOF').show();
        // $('#pipeOn').hide();
    $("#ttop").css("backgroundColor","red");
    $("#white").stop();
    $("#be").stop();
    $(".f1").stop();
    $(".f1").stop();
    $(".f2").css("display","none");
    });
    });