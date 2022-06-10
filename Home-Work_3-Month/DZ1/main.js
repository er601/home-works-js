// First task
const element1 = document.getElementById('string-1')
const element2 = document.getElementById('string-2')
const element3 = document.getElementById('string-3')
const element4 = document.getElementById('string-4')
const element5 = document.getElementById('string-5')
const element6 = document.getElementById('string-6')
console.log(element3.innerText + '\n'
    + element5.innerText + '\n'
    + element2.innerText + '\n'
    + element6.innerText + '\n'
    + element4.innerText + '\n'
    + element1.innerText);




//Second task

let coloring = () => {
    let myNodelist = document.querySelectorAll(".element");
    for (let i = 0; i < myNodelist.length; i++){
        if (i < 3) {
            myNodelist[i].style.color = "red";
        } else {
            myNodelist[i].style.color = "green";
        }
    }
}
coloring();




// Third task

console.log("================Third task============")

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const todo = document.getElementById(`todo-list`)
for (let i = 0; i<tasks.length; i++){
    let li = document.createElement("li")
    li.innerHTML = tasks[i];
    li.className = "task"
    todo.append(li)
}

console.log("======================================")



//Forth task
console.log("================Forth task============")



document.querySelectorAll('article>p').forEach((addHr) => {
    addHr.insertAdjacentHTML('afterend', '<hr/>');
})



console.log("======================================")




//Fifth task
console.log("================Fifth task============")


const div = document.querySelectorAll(`.item`);
for (let i = 0; i <div.length; i++){
}



console.log("======================================")



// //Sixth task

let  addinfo = () => {
 let ul = document.createElement('ul');
 document.body.appendChild(ul);
  while (true) {
    let newLi = prompt("Введите текст для пункта списка");
      console.log(newLi)

    if (newLi === null || newLi.length === 0) {
       break;
    }

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
    ul.appendChild(li);
}
}


let hrline = () => {

let referenceNode = document.querySelectorAll('p');
for(let i = 0; i < referenceNode.length; i++){
    let newNode = document.createElement('hr');
    referenceNode[i].appendChild(newNode);
}
}
addinfo();
hrline();


console.log()