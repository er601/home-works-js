

let valid = (form) => {
    let fail = false;
    let name = form.name.value;
    let password = form.password.value;
    let RePassword = form.RePAssword.value;

    if (name == "" || " ")
        fail = "Вы не ввели свое имя";
    else if (password == "")
        fail = "Вы не ввели пароль";
    else if (password != RePassword)
        fail = "Пароли не совпадают";
    if (fail)
        alert(fail);
}
