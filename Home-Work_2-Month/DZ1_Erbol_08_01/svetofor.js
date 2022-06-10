const color = prompt("Введите цвет")

switch (color) {
    case "Red":
        console.log("Двигаться нельзя");
        break;
    case "yellow":
        console.log("Предупреждение");
        break;
    case "green":
        console.log("Двигаться можно");
        break;
    default: // дефолт на всякий случай написал, а так в светофоре не может быть четвертого цвета :-)
        console.log("Цвет не найден ! ")
        break;
}
