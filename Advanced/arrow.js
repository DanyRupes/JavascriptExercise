const sayHello = name => `hey there ${name}`

// console.log(saySomething('Sammy'));

const todos = [{
    title: 'Go to church',
    isDone: true,
},{
    title: 'Buy some meet for cook',
    isDone: true
},{
    title: 'buy ingredients',
    isDone : true,
},
{
    title: 'Done your Cook',
    isDone : false,
},
{
    title:'go to play',
    isDone:false,
},
{
    title:'meet with friends',
    isDone:false,
}
]
// const thingsDone = todos.filter((todos) => todos.isDone === true)
 const thingsNotDone = todos.filter((todos) => todos.isDone===false)
//  const result = thingsNotDone.filter((thingsNotDone) => titl)
console.log("things are not to be Done !!")
for (var i=1; i<thingsNotDone.length;i++){
console.log(`${i}.` +thingsNotDone[i].title);
}