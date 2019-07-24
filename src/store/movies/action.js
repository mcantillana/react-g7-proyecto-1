import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE} from './const';


export const addMovieAction = movie => 
    dispatch => dispatch({
        type: ADD_MOVIE,
        payload: movie
    })



export const deleteMovieAction = movie => 
    dispatch => dispatch({
        type: DELETE_MOVIE,
        payload: movie
    })


export const editMovieAction = movie => 
    dispatch => dispatch({
        type: EDIT_MOVIE,
        payload: movie
    })
