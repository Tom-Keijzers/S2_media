
const button = document.getElementById('colorButton');

const veranderAchtergrondkleur = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
};

button.addEventListener('click', veranderAchtergrondkleur);