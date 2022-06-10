const func = (num1, num2) => {
    if (num1 > num2) {
        console.log("Второе число меньше")
    } else if (num2 > num1) {
        console.log("Первое число меньше")
    } else {
        console.log("Числа равны")
    }
}

let number1 = prompt("Ведите первое число");
let num1 = Number(number1);


let number2 = prompt(" Введите второе число");
let num2 = Number(number2)

func(num1, num2);
