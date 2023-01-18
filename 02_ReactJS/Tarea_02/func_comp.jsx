import React, { useState, useEffect } from 'react'
import '../../styles/clock.scss';

const Clock = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [state, tick] = useState(defaultState);

    useEffect(() => {
        tick();

        const timerID = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        state.edad = state.edad + 1;
        state.fecha = new Date();
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );

};

export default Clock;