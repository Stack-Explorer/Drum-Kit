$(".drum").click(function (e) {
    var buttonInnerHTML = $(this).html();
    key(buttonInnerHTML);
})

$(document).keydown(function (e) {
    const pressedKey = (e.key);
    key(pressedKey);
});

function key(pressedKey) {

    const lowerKey = pressedKey.toLowerCase();

    switch (lowerKey) {
        case "w":
            playSound("w")
            animatePress("w");
            break;
        case "a":
            playSound("a");
            animatePress("a");
            break;
        case "s":
            playSound("s")
            animatePress("s");
            break;
        case "d":
            playSound("d");
            animatePress("d");
            break;
        case "j":
            playSound("j");
            animatePress("j");
            break;
        case "k":
            playSound("k");
            animatePress("k")
            break;
        case "l":
            playSound("l");
            animatePress("l");
            break;
        default:
            console.log("Enter valid key");
            break;
    }
}

function animatePress(currentKey) {
    $(`.${currentKey}`).addClass("pressed");

    setTimeout(() => {
        $(`.${currentKey}`).removeClass("pressed");
    }, 100);
}

function playSound(currentBtn) {
    const play = new Audio(`sounds/${currentBtn}.mp3`);
    play.play();
}