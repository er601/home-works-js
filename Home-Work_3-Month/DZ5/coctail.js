const searchBtn = document.getElementById('searchBtn')
const inputField = document.getElementById('input')
const modal = document.getElementById('modalDiv')
let modalOpenBtn = document.getElementById('modalBtn')
let openModal = document.getElementById('mShow')
let liIng = document.getElementById('ing')
let liIng2 = document.getElementById('ing2')
let pIns = document.getElementById('ins')

let closeModal = document.getElementById('close')
const smallWindow = document.getElementById('smallWindow')

let CName = document.getElementById('name')

const searchCoctail = async () => {
    console.log(inputField.value)
    try {
        const coctailDb = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputField.value}`)
        const data = await coctailDb.json();
        console.log(data);

        for (let i = 0; i < data.drinks.length; i++) {
            const divMain = document.createElement('div')
            divMain.className = 'coctail'
            const p = document.createElement('p')
            p.setAttribute('id', 'modalWin')
            p.innerText = data.drinks[i].strDrink;
            p.style.cursor = 'pointer'
            const span = document.createElement('span')
            span.className = 'img'
            span.style.backgroundImage = `url(${data.drinks[i].strDrinkThumb})`
            span.style.backgroundSize = 'cover'
            span.style.backgroundPosition = 'center'//Картинка напитка
            const divModal = document.createElement('div')
            divModal.className = 'modalDiv'
            divModal.setAttribute('id', 'modalDiv')//Модальное окно
            const btnMore = document.createElement('button')
            btnMore.textContent = 'View ditails'
            btnMore.addEventListener('click', (e) => {
                openModal.style.display = "block"
                let pText = e.target.parentElement.childNodes[1]
                data.drinks.forEach((item) => {
                    if (item.strDrink === pText.textContent) {
                        ingredients(item.idDrink)
                        console.log('da')

                    }
                })
            })
            btnMore.setAttribute('id', 'modalBtn')
            const innerModalDiv = document.createElement('div')
            innerModalDiv.className = 'modal-content'//Модальное окно
            const modalHeader = document.createElement('div')
            modalHeader.className = 'modal-header'
            const inModalHeadH = document.createElement('h3')
            const inModalHeadSpan = document.createElement('span')
            inModalHeadSpan.className = 'close'
            inModalHeadSpan.textContent = 'X'
            inModalHeadSpan.addEventListener('click', () => {
                divModal.style.display = "none"
            })
            modalHeader.appendChild(inModalHeadH)
            modalHeader.appendChild(inModalHeadSpan)//Модальный хэдэр
            const modalBody = document.createElement('div')
            modalBody.className = 'modal-body'
            const inModalBodyContent = document.createElement('p')
            inModalBodyContent.innerText = 'Тут будут ингридиенты!'
            modalBody.appendChild(inModalBodyContent)//Модальное тело
            const modalFooter = document.createElement('div')
            modalFooter.className = 'modal-footer'
            const inModalFooterH = document.createElement('h3')
            inModalFooterH.textContent = 'Instruction: '
            const inModalFooterP = document.createElement('p')
            inModalFooterP.textContent = data.drinks[i].strInstructions;
            modalFooter.appendChild(inModalFooterH)
            modalFooter.appendChild(inModalFooterP)//Модальный футер, способ приготовления
            innerModalDiv.appendChild(modalHeader)
            innerModalDiv.appendChild(modalBody)
            innerModalDiv.appendChild(modalFooter)
            divModal.appendChild(innerModalDiv)
            divMain.append(span)
            divMain.appendChild(p)
            divMain.append(btnMore)
            divMain.append(divModal)
            smallWindow.append(divMain);
        }
    } catch (e) {
        alert("404 Not Found")
    }
}

async function ingredients(id) {
    console.log('iwte')

    const ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
    const data = await ingredients.json();
    console.log(data.drinks[0], '====')
    CName.innerText = data.drinks[0].strDrink
    pIns.innerText = data.drinks[0].strInstructions

    for (let i = 1; i < 16; i++) {
        if (data.drinks[0][`strIngredient${i}`] !== null) {
            let li = document.createElement('li')
            li.textContent = data.drinks[0][`strIngredient${i}`]
            liIng.insertAdjacentElement('beforebegin', li)
        }
    }
    for (let i = 1; i < 16; i++) {
        if (data.drinks[0][`strIngredient${i}`] !== null) {
            let li = document.createElement('li')
            li.textContent = data.drinks[0][`strMeasure${i}`]
            liIng2.insertAdjacentElement('beforebegin', li)
        }
    }
}

closeModal.addEventListener('click', () => {
    openModal.style.display = 'none'
})


searchBtn.addEventListener('click', searchCoctail)
inputField.addEventListener('change', searchCoctail)








function fontSizeChanger(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

const size12 = fontSizeChanger (12);
const size14 = fontSizeChanger (14);
const size16 = fontSizeChanger (16);
