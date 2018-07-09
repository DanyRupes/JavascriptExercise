// $('#btnAnimate').click(function () { 
//     $('.animateMe').animate({
//         "border-radius": "50%",
//     },2000)
//  })

//  $('#title').click(function () { 
//      $('#content').slideToggle('slow')
//   })    
 
//   $('#content').click(function () { 
//     $('#content').slideUp('slow')
//  })

// $('#select').selectable();
// $('#grid').selectable()

// $('.WebPage').accordion({collapsible:true})

// $('#myChart')
// line
// bar
// doughnut
// pie
// radar
// polarArea
// bubble
// scatter
var dort = document.getElementById('myChart')
var myChart = new Chart(dort,{
    type : 'bar',
    data : {labels : ['India','Japan','England','Autralia','WestIndies','China'],
            datasets : [{
                label : '# of Countries',
                data : [400,300,150,100,100,100],
                backgroundColor : ['green','yellow','pink','rgba(255, 159, 64, 0.2)','orange','skyblue'],
                borderColor : ['skyblue','orange','green','skyblue','black','rgba(255, 159, 64, 0.2)'],
                borderWidth  :1
            }]},
    options : { scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }
        }]
    }}
})

$('#ITA').accordion()
var data = document.getElementById("subChart")
var calculation = new Chart(data,{
    type :'doughnut',
    data :{labels : ['Network Security','Web Technology','Mobile Communication','Data Mining','IOT'],
           datasets : [{label : '# of Subjects',
    data : [200,300,100,100,300],
    backgroundColor : ['green','yellow','pink','rgba(255, 159, 64, 0.2)','orange','skyblue'],
    borderColor : ['skyblue','orange','green','skyblue','black','rgba(255, 159, 64, 0.2)'],
    borderWidth : 1,
    }]},
options : {
    scales  :{
        yAxes : [{
            ticks : {
                beginAtZero : true
            }
        }]
    }
}
})
