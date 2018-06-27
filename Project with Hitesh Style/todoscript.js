// // alert('hello')


// var h = document.createElement('h1')

// var myValue = document.createTextNode("Hello Text Node")

// h.appendChild(myValue)
// document.querySelector('p').appendChild(myValue);

// var val = 5
// while(val <10){
//     console.log(val)
//     val++;
// }

// var testNode = document.createTextNode("Please add Some To do");
// document.querySelector('p').appendChild(testNode)

///// Todo Operationss



var ul = document.getElementById('list');
var li;
var p;
var emptyAdd;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove');
addButton.addEventListener('click', removeItem)

function addItem(){
   
    var input = document.getElementById('input');
    var item = input.value;
    var timeoutID;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);
    if(item === ''){
        emptyAdd = document.createTextNode("Please add Some To do");
        document.querySelector('#p1').appendChild(emptyAdd)
        timeoutID = window.setTimeout(clearingP, 2000);
        return false;
    }

    else{
        //creating li
       li =  document.createElement('li');
       //creating checkBox
       var checkBox = document.createElement('input');
       checkBox.type = 'checkbox';
       checkBox.setAttribute('id', 'check');
       //create label
       var label = document.createElement('label');
    //    label.setAttribute('for', 'item'); //optional

    //add these elements on web page

    ul.appendChild(label);
    li.appendChild(checkBox)
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0])
    // li.className = 'visual';
    

    setTimeout(() =>{
        li.className = 'visual';
    },4)
    input.value = '';
    }


}

function clearingP() {
    var myPElements = document.querySelector('#p1')
    myPElements.textContent = ''
    // document.querySelector('#p1').value = "";
    // alert("That was really slow!");
  }























