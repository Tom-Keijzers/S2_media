const dvd = document.getElementById('dvd');

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 3;
let dy = 2;

const move = () => {
    const maxX = window.innerWidth - dvd.offsetWidth;
    const maxY = window.innerHeight - dvd.offsetHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x >= maxX) {
        dx = -dx;
    }

    if (y <= 0 || y >= maxY) {
        dy = -dy;
    }

    dvd.style.left = `${x}px`;
    dvd.style.top = `${y}px`;

    requestAnimationFrame(move);
};

move();
