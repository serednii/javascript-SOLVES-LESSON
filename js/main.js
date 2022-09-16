//Добавити зображенням, на які клікнув користувач, класс border в в оформлені якого є меда і тінь
//Add a border class to the image that the user clicked on, which is decorated with honey and a shadow
document.onclick = function (event) {
    event = event || window, event; //Для старих браузерів For old browsers
    if (event.target.tagName == "IMG") {
        console.log("dfsgs") ж
        event.target.classList.toggle('bordered');
    }
}