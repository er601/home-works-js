let like = 0;

const updateCount = () => {
    const countTeg = document.getElementById("like");
    countTeg.innerText = like
}
updateCount();

const liekCount = () => {
    like++;
    updateCount();
}



let dislike = 0;

const updateCount2 = () => {
    const countTeg2 = document.getElementById("dislike");
    countTeg2.innerText = dislike
}
updateCount2();

const dislikeCount = () => {
    dislike++;
    updateCount2();
}
