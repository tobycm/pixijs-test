import startSpinning from "./spinningLogo";

const startScreen = new PIXI.Application({
    background: "#1e1e1e",
    width: window.innerWidth,
    height: window.innerHeight,
});

const startText = new PIXI.Text("Click to start", {
    fontFamily: "Comic Sans MS",
    fontSize: 36,
    fill: "white",
    align: "center",
});

startText.position = {
    x: startScreen.screen.width / 2,
    y: startScreen.screen.height / 2
}
startText.anchor.set(0.5, 0.5);
startScreen.stage.addChild(startText);

document.querySelector("#app").appendChild(startScreen.view);

document.body.addEventListener('click', () => startGame());
document.body.addEventListener('touchstart', () => startGame());

function startGame() {    
    const fadeOut = new PIXI.Graphics();
    fadeOut.beginFill(0x000000);
    fadeOut.drawRect(0, 0,
        startScreen.screen.width, startScreen.screen.height);
    fadeOut.endFill();
    fadeOut.alpha = 0;
    startScreen.stage.addChild(fadeOut);

    const fadeOutTicker = PIXI.Ticker.shared;
    fadeOutTicker.add(() => {
        fadeOut.alpha += 0.01;
        if (fadeOut.alpha >= 1) {
            fadeOutTicker.stop();
            startScreen.destroy();
            startSpinning();
        }
    })

}