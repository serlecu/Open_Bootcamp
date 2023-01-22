import React, { useState, useEffect } from 'react';

let red = 255;
let green = 255;
let blue = 255;

let defaultStyle = {
    width: '255px',
    height: '255px',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
}

const Cuadrado = () => {
    const [rouletteSwitch, setRouletteSwitch] = useState(false);
    const [dynamicStyle, setDynamicStyle] = useState(defaultStyle);

    function colorRoulette() {
        if (rouletteSwitch) {
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);

            let newStyle = {
                width: '255px',
                height: '255px',
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }       

            setDynamicStyle(newStyle);
            console.log('colorRoulette');
        }

    }
    function turnRoulette(state) {
        setRouletteSwitch(state);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            colorRoulette();
        }, 100);
        return () => clearInterval(interval);
    }, [rouletteSwitch]);

    return (
        <div style={dynamicStyle}
            onMouseEnter={() => { turnRoulette(true)}}
            onMouseLeave={() => turnRoulette(false)}
            onDoubleClick={() => turnRoulette(false)}>
            <h1>Este es el cuadrado</h1>
        </div>
    );
}

export default Cuadrado;
