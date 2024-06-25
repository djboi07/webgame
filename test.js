const gamebtn = document.getElementById('game1');
let moving = false;

gamebtn.addEventListener('mouseover', function() {
    if (!moving) {
        moving = true;
        moveRight();
    }
});

gamebtn.addEventListener('mouseout', function() {
    moving = false;
});

function moveRight() {
    if (moving) {
        gamebtn.style.left = (gamebtn.offsetLeft + 1) + 'px';
        gamebtn.style.top = (gamebtn.offsetTop + 1) + 'px';
        requestAnimationFrame(moveRight);
    }
}


document.getElementById('game1').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

