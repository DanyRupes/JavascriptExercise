// $('#one').draggable()
// $('#two').draggable({axis : "x"})
// $( "#three" ).droppable(
//     {
//         accept : "#two",
//         drop :function()
//     {
//         alert("I am dropped");
//     }
// })


// $('#sam').click(function(e){

//  $('#sam').html("Sam")
// })
// $('#breezy').mouseup(function(e){

//     $('#breezy').text("Breezy")  
//     // alert('hi')
// })
// $('#in1').mouseenter(function (e) {
//     console.log($('#in1').val())
//     $('#in1').val("Hello DanyRupes")
//   })
// $('#dany').mousedown(function(){
//     console.log($('#dany').html())
//     $('#dany').attr('align', 'center')   
// })

// $(document).keypress(function(e){
// alert("You Presses : " +String.fromCharCode(e.which))
     
 
// });
$('#cool').show()
$('#receive').hide()
$('#encode').hide()
$('#decode').hide();
$('#output').hide()
$('#res').hide()
$('#send').show()
$('#send').css({color : "green"})
$('#Next').hide()
$('#tit').show()
$('#mine').fadeOut(1000);
$('#cool').click(function () { 
    $('#send').fadeOut(800)
    $('#cool').fadeOut(800)
    $('#tit').fadeOut(800)
    $('#encode').css({color : "blue"})
    $('#encode').fadeTo(2000,0.5)
    $('#res').show(2000)
    // $('#encode').text("Success")
    $('#encode').fadeOut(600)
 })

 $('#res').click(function () { 
     $('#decode').css({color: "orange"})
     $('#decode').fadeTo(1000,0.5);
     $('#decode').hide(100);
     $('#output').fadeIn(1000)
     $('#output').text("Received Message : " +$('#send').val())
     $('#output').css({color : "green"})
     $('#output').fadeIn(4200)
     $('#Next').fadeIn(1000)
  })

  $('#Next').click(function () { 
    $('#mine').fadeOut(10);
      window.location.reload()
   })
$('#temp').click(function () { 
    $('#mine').fadeToggle(1000);
    // $('#Next').toggle()
 })