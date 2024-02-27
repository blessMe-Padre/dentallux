document.addEventListener('DOMContentLoaded', function () {
    var target = document.querySelector('.burger-icon');
    var isClosed = true;

    target.addEventListener('click', function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed) {
            target.classList.remove('open-burger');
            target.classList.add('closed-burger');
            isClosed = false;
        } else {
            target.classList.remove('closed-burger');
            target.classList.add('open-burger');
            isClosed = true;
        }
    }
});
