import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardTemplate from '../components/CardTemplate';
import DetailModal from '../components/DetailModal';
import Header from '../components/Header';

const Main = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`;

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    useEffect(async () => {
        try {
            await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
                .then(resp => resp.json())
                .then(data => setMovies(data.Search));
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div>
            <Header />
            <h1>Latest Movies</h1>
            <div style={{ margin: '0 50px' }}>
                <Main>
                    <CardTemplate data={movies} />
                </Main>
            </div>
        </div>
    )
}

export default Homepage;