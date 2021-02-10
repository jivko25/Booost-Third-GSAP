import EventEmitter from 'eventemitter3';
import gsap from 'gsap/all';
import config from '../../config';
gsap.registerPlugin(MotionPathPlugin);
import MotionPathPlugin from "../../../node_modules/gsap/MotionPathPlugin";

export default class Animation{
    constructor(){
        this._rocketElement = document.querySelector('.rocket');
        this._backgroundElement = document.querySelector('.background');
        this._svgPath = config.svgPath;
        this._rocketTween = null;
        this.stop = false;
        this.temp = null;
    }
    play(){

    this._rocketTween = gsap.to(this._rocketElement, {
        motionPath: {
            path: this._svgPath, 
            autoRotate : true
        },                        
        duration:5, 
        ease:'power1.in',
        repeat: -1
    });
    };

    // stop(){
    //     this._rocketPath.kill();
    //     this._rocketPath = null;
    // }

    // pause(){
    //     this._rocketPath.paused();
    //     this._rocketPath = null;
    // }
    start(){
        this.play();

        this._backgroundElement.addEventListener('click', () => {
            if (this.stop == false) 
            {
                this._rocketTween.pause();
                this._rocketTween.kill();
                this.temp = this._rocketTween;
                this._rocketTween = null;
                console.log(this._rocketTween);
                this.stop = true;
            }
            else 
            {
                this._rocketTween = this.temp;
                this._rocketTween.restart();
                this.stop = false;
                console.log(this._rocketTween);
            }
          });
    }
}