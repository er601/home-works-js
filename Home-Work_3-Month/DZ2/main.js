
//First task
const container = document.getElementById('container')
const addElement = () => {
    const div = document.createElement('div')
    div.setAttribute(`class`, 'element')
    div.innerText = 'Element'
    container.appendChild(div)
}


//Second task

const container2 = document.getElementById('container2')
const addElement2 = () => {
    const div2 = document.createElement('div')
    div2.setAttribute('class', 'element')
    div2.innerHTML = Math.floor(Math.random() * 20)
    container2.appendChild(div2)
}
addElement2()

let interval = setInterval(addElement2, 5000)
const startInterval = () => {
    interval = setInterval(addElement2, 5000)
}

const stopInterval = () => {
    clearInterval(interval)
}


//Third task

const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const go = document.getElementById('start2')
const stp = document.getElementById('pause')
const rst = document.getElementById('reset')

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, `0`)
    if (+seconds.textContent === 60) {
        minutes.textContent = (+minutes.textContent +1).toString().padStart(2, `0`)
        seconds.textContent = `00`
    }
}

// let timerInterval = setInterval(timer, 1000)
const intervalStart = () => {
    timerInterval = setInterval(timer, 1000)
    go.disabled = true;
    stp.disabled = false;
    rst.disabled = false;
}
const intervalStop = () => {
    clearInterval(timerInterval)
    go.disabled = false;
    stp.disabled = true;
    rst.disabled = false;
}
const intervalReset = () => {
    clearInterval(timerInterval)
    minutes.textContent = `00`
    seconds.textContent = `00`
    go.disabled = false;
    stp.disabled = false;
    rst.disabled = true;
}








//Forth task

const user = document.forms[0];
const logIn = user.lastElementChild;

const check = () => {
    if (user.username.value.length < 6 || user.password.value.length < 6){
        logIn.disabled = true;
    }else{
        logIn.disabled = false;
    }
}
const log = (e) => {
    e.preventDefault();
    alert(`Username = ${user.username.value} \n Password = ${user.password.value}`)

}

user.addEventListener('change', check)
logIn.addEventListener(`click`, log)








// Fifth task

