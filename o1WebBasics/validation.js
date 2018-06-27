// alert('hello')

// function myValidation(){
//     let myValue = document.getElementById('value1').value   
//     // console.log(myValue)

//     if(myValue == ""){
//         alert('Please fill input')
//     }
//     else{
//     const changeP1 = document.querySelector('#p1')

     
//         if(isNaN(myValue) || myValue < 1 || myValue > 20){
//         changeP1.textContent = "Hey Something wrong in your Input.. Try Again"
//         console.log("Not a valid input")
//         }
//          else{
//         changeP1.textContent = "Your input is Accepted..!"
//         console.log("This input is Okay")
//      }
//   }
// }

// // /myForm Validatio

// document.querySelector('.myForm').addEventListener('submit', (event)=>{
//     event.preventDefault();
//     console.log(event.target.userName.value)
//     console.log(event.target.realName.value)
//     event.target.userName.value = ""
//     event.target.realName.value = ""
// })

document.querySelector('.myForm2').addEventListener('submit', (event) =>{
    event.preventDefault();
    let p2Change = document.querySelector('#F2p1')

    let Mail = event.target.email.value
    let Pass = event.target.password.value
    let rePass = event.target.rePassword.value

    if (Mail == "john@gmail.com"){
        if(Pass === rePass){
             p2Change.textContent = `Hello John you are Welcome`
        }
        else{
            alert('Password Not Match')
        }
        event.target.userName.value = ""
        event.target.email.value = ""
        event.target.password.value = ""
        event.target.rePassword.value = ""
    }
    else{
        // let passCode = Pass.length
        alert(`Hey ${Mail} is Not a Valid Email with that Password`)
        event.target.userName.value = ""
        event.target.email.value = ""
        event.target.password.value = ""
        event.target.rePassword.value = ""
    }
    console.log(Mail)
    console.log(Pass)
})

