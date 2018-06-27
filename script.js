
$( function() {
    $( "#datepicker" ).datepicker({
        minDate:"+0",
        maxDate:"+10"       
    }); 
  } );
var notifyPara = document.querySelector("#p1");
  
// console.log(notifyPara)
function abc(){
var Sub = document.getElementById("submit");
var Name = document.getElementById("name");
var Re_Pass = document.getElementById("re_pass");
var Email = document.getElementById("email");
var Pass = document.getElementById("pass");
var aDress = document.querySelector("pre");


var jSon = {"nAme":Name.value, "eMail" :Email.value,"pAss": Pass.value};
var oBject = JSON.stringify(jSon) 
// console.log(oBject)
console.log(oBject)
console.log(jSon)


console.log(oBject[nAme]);

// aDress.textContent = oBject.nAme + oBject.eMail + oBject.pAss;

    // var result = []
    // if (Name.value == ""){
    //     result.push("Name")
    //     Name.style.borderColor = "#d63031"
    // }
    //  if (Email.value == ""){
    //     Email.style.borderColor = "#d63031"
    //     result.push("Email")
    // }
    //  if (Pass.value == ""){
    //     Pass.style.borderColor = "#d63031"
    //      result.push("and password")
    //  }

    //  if(result == ""){
    //      alert("Registered Successfully")
    //     //  Sub.value ="";
    //     //  Name.value ="";
    //     //  Email.value ="";
    //     //  Pass.value ="";
    //     //  Re_Pass.value ="";
    //  }
    //  else {
    //  notifyPara.textContent = "Fill" + result;
    //  notifyPara.style.color = "#ff7675"
    // //  alert(result + " must be filled")
    //  }
     

return false;

}
