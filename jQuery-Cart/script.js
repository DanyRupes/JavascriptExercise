var value = parseInt($("#qty").val());
var price = $("#cOst").html();
var total = parseInt(price);
console.log(price)

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    if (value < 100)
     {
        value = value + 1;
    } else {
        value =100;
    }
     
    $("#qty").val(value)
    total = value * 1500;
    $("#cOst").text("$"+total)


});


$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    
    if (value > 1) {
        value = value - 1;
        $("#qty").val(value)
        total = total - price;
        $("#cOst").text("$"+total)
    } else {
    
        $("#qty").val(0) 
        $("#cOst").text("0")
    }

 
});

