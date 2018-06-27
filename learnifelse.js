if (5>8){
    console.log("I am Inside if blog")

}
else if(5==5){
    console.log("I am inside elseif")
}
else if(5==5){
    console.log("I am inside elseif 2")
}
else{
    console.log("I am inside of else block")
}

var whoIshere = 'teacheer'

if (whoIshere === 'user'){
    console.log("Welcome user")
    console.log("Hello Access to view all courses")
}

else if(whoIshere === 'teacher'){
    console.log("welcome teacher")
    console.log("hello access to all")
}
else{
    console.log("   MESSAGE : please verify User")
}

//Grade problem 

var marks = 3;

console.log("Marks = " +marks)

if (marks <=0){
    console.log("fail")
} 

else if (marks<=3 && marks>0){
    console.log("poor")
}

else if (marks<=5 && marks>3){
    console.log("Average")
}
else if (marks<7.5 && marks>5){
    console.log("Average")
}
else if(marks >=10){
    console.log("Amazing")
}
else{
    console.log("Please Enter Valid Input")
}