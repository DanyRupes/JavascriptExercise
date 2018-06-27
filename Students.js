
console.log("**** STUDENT MARK GRADE")



let Result = function(currentMark, totalMark){

    let myPercent = (currentMark/totalMark) * 100
    let myGrade = ''
    if(myPercent >=90){
        myGrade = 'A'
    }
    else if(myPercent >=80){
        myGrade = 'B'
    }
    else if(myPercent >=70){
        myGrade = 'C'
    }
    else if(myPercent >=60){
        myGrade = 'D'
    }
    else if(myPercent >=50){
        myGrade = 'F'
    }
return "Your grade is " +myGrade +" Your Percentage is "+myPercent;
}


let res = Result(92, 100)
console.log(res)
