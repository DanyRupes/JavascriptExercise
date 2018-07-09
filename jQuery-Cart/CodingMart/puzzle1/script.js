$(document).ready(function () { 
    $('.container').css({
        "margin": "auto",
        "margin-top": "10%",
        width: 600+"px",
        height: 430+"px",
        "background-color":"rgb(8, 228, 81)",
        color: "royalblue",
        border: "2px solid goldenrod",
    })
    $('.box').css({
        width : 100+"px",
        height : 70+"px",
        border : 1+"px solid",
        "text-align" : "center",
    })
    var move = 0;
    var mTop = 0;
    var mLeft = 0;
    $('html').keydown(function(e){    //keydown for pc
        var i = e.which;
        if(i <41 && i>36){
            if(i == 37 && mLeft>0){
                $('.box').animate({
                    "margin-left" : mLeft-100+"px",
                },200)
                mLeft = mLeft -100
            }
            if(i == 39 && mLeft<=400){
                $('.box').animate({
                    "margin-left" : mLeft+100+"px",
                },200)
                mLeft = mLeft +100
            }
            if(i == 38 && mTop>0){
                $('.box').animate({
                    "margin-top" : mTop-100+"px",
                },200)
                mTop = mTop -100
            }
            if(i == 40 && mTop<=200){
                $('.box').animate({
                    "margin-top" : mTop+100+"px",
                },200)
                mTop = mTop +100
            }
            }
        else{}
    })
 })

 
        // if(move>400){
        //     console.log(mTop)
        //     $('.box').animate({
        //         "margin-top" : mTop+100+"px",
        //         "margin-left" : 0+"px",
        //     },400)
        //     move =0;
        //     mTop = mTop +100;
        //     return true;
        // }
        // $('.box').animate({
        //     "margin-left" : move+100+"px",
        //     "background-color" : "orange"
        // },400)
        // move = move+100;