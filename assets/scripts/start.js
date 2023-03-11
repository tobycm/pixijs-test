import startSpinning from "./spinningLogo";

PIXI.sound.add("double_bamboo_hit", {
    url: 'assets/sounds/double_bamboo_hit.mp3',
    preload: true,
});

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

const startScreenView = document.querySelector("#app").appendChild(startScreen.view);

document.body.addEventListener('click', () => startGame(), { once: true });
document.body.addEventListener('touchstart', () => startGame(), { once: true });

function startGame() {    
    const fadeOutOverlay = new PIXI.Graphics();
    fadeOutOverlay.beginFill(0x000000);
    fadeOutOverlay.drawRect(0, 0,
        startScreen.screen.width, startScreen.screen.height);
    fadeOutOverlay.endFill();
    fadeOutOverlay.alpha = 0;
    startScreen.stage.addChild(fadeOutOverlay);

    const ticker = PIXI.Ticker.shared;
    function fadeOut() {
        fadeOutOverlay.alpha += 0.01;
        if (fadeOutOverlay.alpha >= 1) {
            ticker.remove(fadeOut);
            startScreen.destroy();
            document.querySelector("#app").removeChild(startScreenView);

            startSpinning();
            PIXI.sound.play("double_bamboo_hit");
        }
    }
    ticker.add(fadeOut)

}