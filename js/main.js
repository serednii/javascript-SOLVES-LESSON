//маємо progress bar який має заповнюватися за певний час, цей час задає програміст як параметр функції
//We have a progress bar that must be filled in a certain time, this time is set by the programmer as a parameter of the function

function userprogress(time) {
    time = time * 10;
    console.log(time)
    let start = 0;
    const progressElement = document.getElementById('user-progress');

    setTimeout(function () {
        let intervalID = setInterval(function () {
            if (start < 100) {
                progressElement.value = start;
            } else {
                clearInterval(intervalID);
                userProgressCallBack();
            }
            start++;
        }, time);
    }, 2000);

    function userProgressCallBack() {
        //your-code
        document.querySelector('.hidden-block').style.display = "block";
    }
}

userprogress(2);