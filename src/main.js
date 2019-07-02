import 'phaser';
//import BootScene from './scenes/BootScene';
//import GameScene from './scenes/GameScene';
//import TitleScene from './scenes/TitleScene';

const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    pageAlignHorizontally: true,
    pageAlignVertically: true,
    setScreenSize: true,
    width: 800,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 800
            },
            debug: false
        }
    },
    scene: [
        //BootScene,
        //TitleScene,
        //GameScene
    ]
};

const game = new Phaser.Game(config);
