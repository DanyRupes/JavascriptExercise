 let myTodos = ['Buy Bread', 'Go to Gym','Record videos' ]

// console.log(myTodos[newTodos.indexOf(1)]) // returns Index value if Acquirate else return -1

const newTodos = [{
    title:'Buy Bread',
    isDone:false
    
},{
    title:'Go to Gym',
    isDOne:false, 
},{
    title:'Record videos',
    isDOne:false,
}]

//Method 1
// const index = newTodos.findIndex(function(todo, index){
//     // console.log(todo)
//     // console.log(index)
//     return todo.title === 'Go to Gym';
// })
// console.log(index)

// const findTodo = function(myTodos, title){

//     const index = myTodos.findIndex(function(todo, index){
//         // a =todo.title.toLowerCase() === title.toLowerCase()
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index] // returns last updated index and its item
// }
// let printme = findTodo(newTodos, "Go to Gym")
// // console.log(a)
// console.log(printme)

//method 2    find()
const findTodo = function(myTodos, title){
const titleReturned = myTodos.find(function(todo, index){
    if(todo.title.toLowerCase() == title.toLowerCase()){
        newTodos[index].isDOne =  true
        return true
    }
     
})
return titleReturned
}
console.log(findTodo( newTodos,"Record videos"))
// console.log(newTodos)