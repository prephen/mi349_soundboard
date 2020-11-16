var clickButton = document.getElementById('click')
var rollButton = document.getElementById('coin-roll')
var fallButton = document.getElementById('coin-fall')



clickButton.addEventListener('click', function () {
    var clickSound = new Audio('audio/click_x.wav');
    clickSound.play();
    })
rollButton.addEventListener('click', function () {
    var rollSound = new Audio('audio/coin_roll.wav');
    rollSound.play();
    })
fallButton.addEventListener('click', function () {
    var fallSound = new Audio('audio/coin2.wav');
    fallSound.play();
    })

clickButton.addEventListener('mouseenter', function () {
    var hoverSound = new Audio('audio/blip.wav');
    hoverSound.play();
    })
fallButton.addEventListener('mouseenter', function () {
    var hoverSound = new Audio('audio/blip.wav');
    hoverSound.play();
    })
rollButton.addEventListener('mouseenter', function () {
    var hoverSound = new Audio('audio/blip.wav');
    hoverSound.play();
    })