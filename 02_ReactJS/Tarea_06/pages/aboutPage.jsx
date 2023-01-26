import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    console.log(location);
    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    }

    const navigateBack = () => {
        history(-1);
    }

    return (
        <section>
            <h1>About</h1>
            <div>
                <button onClick={
                    () => navigateBack()
                }>Go back</button>

                <button onClick={
                    () => navigateTo('/')
                }>TO_HOME</button>
            </div>
        </section>
    );
}

export default AboutPage;
