import { useState } from "react";

export default function useTimer( initialTimer = 15, speed = 30) {
    //States
    let Timer = initialTimer;
    let interval;

    const Counting = (e, Funct) => {
        if (e.key !== 'Alt' && e.key !== 'Tab') {
            Timer = initialTimer;
            clearInterval(interval);
        }else{
            return;
        }

        interval = setInterval(() => {
            Timer--
            if (Timer <= 0) {
                Funct(e);
                clearInterval(interval);
            }
            console.log(Timer);
        }, speed);
    };

    return { Counting }
}