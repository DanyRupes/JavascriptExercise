// console.log(2===2.01)

// console.log("" === "")
let another = {}
let myVar = {} = another
let myVarTwo = {} = another
console.log(myVar == myVarTwo)
console.log(another === another)