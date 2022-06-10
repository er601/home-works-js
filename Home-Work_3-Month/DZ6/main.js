// const input = document.getElementById("input")
// const button = document.getElementById("button")
// const display = document.getElementById("all_country_all")
// const name_country = document.getElementById("name_country")
// const all_country = document.getElementById("all_country")
// const getFrom = () => {
//     const fun1 = new Promise(async function (resolve) {
//         const data = await fetch('https://restcountries.com/v3.1/name/' + input.value)
//         const bor = await data.json();
//         const [{name}] = bor
//         const name_push = document.createElement("div")
//         const img = document.createElement("img")
//         img.setAttribute("src", bor[0]["flags"].png)
//         img.style.width = "50px"
//         name_push.setAttribute("id", "name")
//         name_push.innerText = name["common"]
//         name_country.append(name_push, img)
//         const [{borders}] = bor
//         resolve()
//         Promise.all([fun1]).then(() => {
//             const fun2 = new Promise(function (resolve) {
//                 borders.forEach(async (country, index) => {
//                     const data = await fetch("https://restcountries.com/v3.1/alpha/" + country)
//                     const names = await data.json()
//                     const [{name}] = names
//                     const from_country = document.createElement("div")
//                     from_country.setAttribute("class", "borders")
//                     from_country.innerText = name["common"]
//                     all_country.append(from_country)
//                     const img = document.createElement("img")
//                     img.setAttribute("src", names[0]["flags"].png)
//                     img.style.width = "50px"
//                     all_country.append(img)
//                     if (index + 1 === borders.length) {
//                         resolve()
//                     }
//                 })
//             });
//             Promise.all([fun2]).then(() => {
//                 display.style.display = "block"
//                 console.log('success!');
//             })
//         })
//
//     })
// }
//
// button.onclick = () => {
//     if (name_country != null || all_country != null) {
//         display.style.display = "none"
//         name_country.innerText = ""
//         all_country.innerText = ""
//         getFrom()
//     } else getFrom()
// }
// input.addEventListener('change', getFrom);









// норм вариант ==>

const countryName = document.getElementById('country-name')
const button = document.getElementById('show');
const names = document.getElementById('name');
const borders = document.getElementById('borders');

const BASE_API_BY_NAME = 'https://restcountries.com/v3.1/name/'
const URLS = 'https://restcountries.com/v3.1/alpha/'

button.onclick = function () {
    fetch(`${BASE_API_BY_NAME}${countryName.value}`)
        .then((res) => res.json())
        .then(data => {
            getCountry(data)
            const country = data[0];
            names.innerText = country.name.official
        })
}
function getCountry(data) {
    borders.innerText = ''
    data[0].borders.map((border) => {
        fetch(`${URLS}${border}`)
            .then((res) => res.json())
            .then((data) => {
                let li = document.createElement('li')
                li.innerHTML =  data[0].name.common
                borders.append(li)
            })
    })
}
