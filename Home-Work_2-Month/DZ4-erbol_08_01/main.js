let number = 0;

let  counter = () => {
    const countP = document.getElementById('count')
    countP.innerText = number;
}
counter();

const countVelue = (velue) =>  {
    velue === 'plus' ? number++ :number--;
    counter();
}
