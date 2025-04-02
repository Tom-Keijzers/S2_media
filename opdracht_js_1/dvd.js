const createDVD = () => {
    const dvd = document.body.appendChild(document.createElement('div'));
    dvd.className = 'dvd';
    dvd.textContent = 'Klik';
    dvd.style.position = 'absolute';

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = 3 * (Math.random() < 0.5 ? 1 : -1);
    let dy = 2 * (Math.random() < 0.5 ? 1 : -1);

    const move = () => {
        const maxX = window.innerWidth - dvd.offsetWidth;
        const maxY = window.innerHeight - dvd.offsetHeight;

        x += dx;
        y += dy;

        let hit = false;
        if (x <= 0 || x >= maxX) { dx = -dx; hit = true; }
        if (y <= 0 || y >= maxY) { dy = -dy; hit = true; }

        if (hit) createDVD(); // ⬅️ Dupliceer bij botsing

        dvd.style.left = `${x}px`;
        dvd.style.top = `${y}px`;

        requestAnimationFrame(move);
    };

    move();
};

createDVD(); // Start met één dvd
