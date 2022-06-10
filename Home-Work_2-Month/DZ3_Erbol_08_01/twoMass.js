const ar1 = [1, 2, 3, 4, 5];
const ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = ar1.length
let b = ar2.length
let twoMass = (a, b) => {
    if (a < b) {
        console.log("первый массив меньше второго");
    } else if (a > b) {
        console.log("первый массив больше второго");
    } else {
        console.log("массивы равны ");
    }
}
twoMass(a, b);
