$(document).ready(function () { 

console.log(window.innerWidth)
    incre = -1;
    Index = [];
    setTimeout(()=>{
        init()
        Createbubble();
    },1000)

    function calback(){
        init()
        Createbubble()
    }

    function init() {
        a = Math.random() * 255
        b = Math.random() * 255
        c = Math.random() * 255
        bottm = Math.random() * 500
        top = Math.random() * 500
        Left = Math.random() * 500
        Rht = Math.random() * 500
        incre++
        postionW = Math.random() * 800
        postionH = Math.random() * 650
        // console.log(postionH)
        // console.log(postionW)
     }

//  onclick='removeMe()'
    function Createbubble() {
        $('.bubble').each(function (index, element) { 
            Index[index] = index;
            
            // console.log(Index)
        })
            $('.container').append("<p class='bubble'></p>")
            $('.bubble:last').css({"bottom" : bottm+"px",  "top": top+"px","left": Left+"px","right": Rht+"px",})
            $('.bubble:last').animate({
             width : 300+"px",
             height : 300+"px",
             "background-color" : jQuery.Color(a,b,c)
            },2000,calback)
 
        // $($('.bubble')[incre]).click(function () { 
        //     $($('.bubble')[incre]).hide()
        //   })

     }


    //  $('p').mouseover(function () { 
    //      alert("$(this).index()")
    //   })
     
    //  $('.bubble').each(function (index, element) { 

    //   })
            // $('.container').append("<p class='bubble'></p>")
            // $($('.bubble')[incre]).css({"bottom" : bottm+"px",  "top": top+"px","left": Left+"px","right": Rht+"px",})
            // $($('.bubble')[incre]).animate({
            //  width : 300+"px",
            //  height : 300+"px",
            //  "background-color" : jQuery.Color(a,b,c)
            // },2000,calback)





 })

    //  var removeMe = function() {
    //      $($('.bubble')[incre]).remove()
    //    }