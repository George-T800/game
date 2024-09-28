const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Background change
game.style.backgroundImage = 'url("background.jpg")';
game.style.backgroundSize = 'cover';

function createFruitOrBomb() {
    const item = document.createElement('div');
    const isBomb = Math.random() < 0.2; // 20% chance to be a bomb
    item.classList.add(isBomb ? 'bomb' : 'fruit');

    // Random image for fruits or bombs
    if (isBomb) {
        item.style.backgroundImage = `url('your-image.jpg')`;
    } else {
        const fruitImages = ['ana.jpg', 'ana2.jpg', 'girlfriend-image.jpg', 'girlfriend-level2.jpg'];
        const randomFruit = fruitImages[Math.floor(Math.random() * fruitImages.length)];
        item.style.backgroundImage = `url(${randomFruit})`;
    }

    // Random position and movement
    item.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    item.style.top = '-50px';
    game.appendChild(item);

    let fallInterval = setInterval(() => {
        const currentTop = parseFloat(item.style.top);
        item.style.top = `${currentTop + 5}px`;

        if (currentTop > window.innerHeight) {
            clearInterval(fallInterval);
            game.removeChild(item);
        }
    }, 20);

    item.addEventListener('click', () => {
        clearInterval(fallInterval);
        game.removeChild(item);
        if (isBomb) {
            alert('ვისიიია ვიისიიია ქალი უჟმურიი !!! გაიცინე ცოტა დაყენებული სახის გარეშე!');
            score = 0;
        } else {
            score += 10;
        }
        scoreDisplay.textContent = `Score: ${score}`;
    });
}

setInterval(createFruitOrBomb, 1000);
