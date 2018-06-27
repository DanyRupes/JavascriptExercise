var john = {
    name : 'I am John',
    age : 23,
    isActive: true,
}
var marry = {
    name : 'I am Marry',
    age : 24,
    isActive : false,
}

var sam = {
    name : 'I am Sam',
    age : 26,
    isActive : true,
}

let users = new Map()

users.set('John', john)
users.set('marry', marry)
users.set('sam', sam)
// console.log(users)


// console.log(users.get('sam'))
// console.log(users.keys())

for ( const value of users.values()){
    // console.log(value)
}
for (const [key, value] of users.entries()){
    // console.log(key, " is Active? " +value.isActive)
}


//convert the above line in literals

// users.forEach((value, key) => console.log(key, " is Active? " +value.isActive));


var arrofArr = [['ONE','1'], 
['two','2'],
['three','3']]

var newMap = new Map(arrofArr)
console.log(newMap)
