import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setMoviesData } from './reducer/dataReducer'

const Wrapper = ({ children }) => {
    const dispatch = useDispatch();
    // const [movies, setMovies] = useState([]);
    useEffect(async () => {
        try {
            const a = await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
                .then(resp => resp.json())
                .then(data => dispatch(setMoviesData(data.Search)));
            // .then(data => dispatch(addMoviesData(convertToObject(data.Search))));
        } catch (e) {
            console.log(e);
        }
    }, [dispatch]);
    return (
        <div>
            {children}
        </div>
    )
}

export default Wrapper
