let isVerified = false 
let isLoggedIn = true
let hasPaymentToekn = true
let isGuest = false

if(isVerified && isLoggedIn && hasPaymentToekn){
    console.log("Welocme to your Course")
}

else if (isVerified || isGuest){
    console.log("Allow Previews nly ")
}

else{
    console.log("please contact admin")
}
