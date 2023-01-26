import React, { useState } from 'react';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDown from '@mui/icons-material/ThumbDown';
import chuckConfig from './chuckConfig';

//https://api.chucknorris.io/jokes/random

function getNorrisJoke() {
    return chuckConfig.get('/random', {
        validateStatus: function (status) {
            return status < 500;
        }
    });

};

const ChisteChuck = () => {

    const [chiste, setChiste] = useState(null);
    const [jokeCounter, setJokeCounter] = useState(0);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [voted, setVoted] = useState(true);

    function obtainNorrisJoke() {
        getNorrisJoke()
            .then((response) => {
                console.log(`Response: ${response}`);
                setChiste(response.data);
                setJokeCounter(jokeCounter + 1);
                setVoted(false);
            })
            .catch((error) => {
                alert(`Error: ${error}`);
            })
            .finally(() => {
                console.log(`Finished getting joke.`)
            })
    }

    function likeJoke() {
        setLike(like + 1);
        setVoted(true);
    }

    function dislikeJoke() {
        setDislike(dislike + 1);
        setVoted(true);
    }

    return (
        <div>
            <div>
                <h1>CHUCK NORRIS JOKES</h1>
                <img src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGuXgBrvKe880TYSUoqPhL6MUGyl6iy-_Qjzg7W-peh073XHs4'}
                    alt='portrait of chuck norris'
                    height='200px'
                    />
                {chiste == null ?
                    (
                        <p></p>
                    ) : (
                        <p>{chiste.value}</p>
                    )
                }
            </div>
            <div>
                <button onClick={() => obtainNorrisJoke()}>Get New</button>
            </div>

            {voted === false ?
                (
                    <div>
                    <ThumbUp color='success' 
                        onClick={() => likeJoke()}
                    />
                    <ThumbDown color='error'
                        onClick={() => dislikeJoke()}
                    />
                    </div>
                ) : (
                    <div>
                    <ThumbUp color='disabled' 
                        onClick={() => likeJoke()}
                    />
                    <ThumbDown color='disabled'
                        onClick={() => dislikeJoke()}
                    />
                    </div>
                )
            }

            <div>
                <p>Likes: {like}/{jokeCounter}</p>
                <p>Dislikes: {dislike}/{jokeCounter}</p>
            </div>
        </div>
    );
};

export default ChisteChuck;

/*
1) Botón para generar chiste
2) Botones MAterial UI para votar el chiste
3) Mostrar contadores de chistes gustados y no gustados
(ThumbUp, ThumbDown)
*/