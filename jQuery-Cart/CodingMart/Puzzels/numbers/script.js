
$(document).ready(function () { 
    var count=0;
    var a=0,b=0,c=0,d=0,total=0;
    // }
    
    // if()
    

    $('#a').focusout(function () { 
        if(count==3){
            $('#a').val(total-(b-c-d)-100)
        }
        else{
            a =$('#a').val();
            total =  total - a;
            console.log(total)
            count++;
           
        }

 
     })
     $('#b').focusout(function () {
        if(count==3){
            $('#b').val(total-(a-c-d)-100)

        } 
        else{
            b =$('#b').val();
            total =  total - b;
            console.log(total)
            count++;
        }


     })
     $('#c').focusout(function () { 
        if(count==3){
            $('#c').val(total-(a-b-d)-100)
        }
        else{
            c =$('#c').val();
            // console.log(c)
            total -=c;
            console.log(total)
            count++;
        }


     })
     $('#d').focusout(function () { 
        if(count==3){
            $('#d').val(total-(a-b-c)-100)
        }
        else{
            d =$('#d').val();
            total -=d;
            console.log(total)
            count++;
        }

     })


     $('#total').focusout(function () { 
        total =$('#total').val();
        console.log($('#total').val())
     })
     if($('#a').val()==""){console.log("eeeeee")}


 })