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
        this._rocketPath = null;
        this.stop = false;
    }
    play(){

    this._rocketPath = gsap.to(this._rocketElement, {
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
                this._rocketPath.pause();
                this.stop = true;
            }
            else 
            {
                this._rocketPath.restart();
                this.stop = false;
            }
          });
    }
}