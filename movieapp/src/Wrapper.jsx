import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setMoviesData } from './reducer/dataReducer'

const Wrapper = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(async () => {
        try {
            const { Search } = await fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
                .then(resp => resp.json())
                .then(data => data);
            dispatch(setMoviesData(Search))
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
