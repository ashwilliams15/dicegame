let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector('.img1').setAttribute('src', `images/dice${randomNumber1}.png`);
document.querySelector('.img2').setAttribute('src', `images/dice${randomNumber2}.png`);


function winner(num1, num2) {
    if (num1 > num2) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    } else if (num2 > num1) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }
}

winner(randomNumber1, randomNumber2)