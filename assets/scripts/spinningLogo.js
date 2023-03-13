const app = new PIXI.Application({
    background: "#000000",
    width: window.innerWidth,
    height: window.innerHeight,
});
const tobycm = PIXI.Sprite.from('assets/images/tobycm.png');

tobycm.height = app.screen.height / 2;
tobycm.width = app.screen.height / 2;
tobycm.position = { x: app.screen.width / 2, y: app.screen.height / 2 }
tobycm.anchor.set(0.5, 0.5);

export default function startSpinning() {
    const ticker = PIXI.Ticker.shared;
    ticker.add(() => tobycm.rotation += 0.005);
    app.stage.addChild(tobycm);

    document.querySelector("#app").appendChild(app.view);

    document.body.addEventListener('click', spinLogo);
    document.body.addEventListener('touchstart', spinLogo);

    document.body.addEventListener('resize', () => app.renderer.resize(window.innerWidth, window.innerHeight));
}

function spinLogo() {
    tobycm.rotation += 0.05;
}
