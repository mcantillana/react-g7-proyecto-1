import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { editMovieAction } from '../../store/movies/action';

import FormMovie from './forms_utils/FormMovie';
import SectionTitle from '../common/SectionTitle';
import Title from '../common/Title';



const EditMovie = props => {

    const emptyMovie = {
        id: '',
        name: '',
        gender: '',
        year: '',
        clasification: '',
        director: '',
    }


    useEffect(() => {
        const { movies, movie_id } = props;
        const seleted_movie = movies.filter(
            (movie) => movie.id === movie_id
        ).pop()
        setMovie(seleted_movie);

    }, []);


    const [movie, setMovie] = useState(emptyMovie);
    const [redirect, setRedirect] = useState(false);

    const handlerOnChange = ({target}) => {
        
        console.log(movie);
        setMovie({
            ...movie,
            [target.name]: target.value
        })
    }
    

    const handlerOnSubmit = event => {
        event.preventDefault();
        props.EditMovieToStore(movie);
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/" />;
    }
        
    return (
        <React.Fragment>

            <SectionTitle>
                <Title title={`edit: ${movie.name}`}/>
            </SectionTitle>
            

            <div className="row">
                <div className="col">                    
                <FormMovie 
                        handlerOnSubmit={handlerOnSubmit}
                        handlerOnChange={handlerOnChange}
                        movie={movie}
                        LabelBtn="Update"
                />
                </div>
            </div>

        </React.Fragment>

    );

}


const mapStateToProps = (state, props) => {
    
    return {...state.movies}
    /* 
    console.log(state.movies)
    if (props.movie_id) {
        return {
            movie: state.movies[0] //.map(movie => movie )//state.movies.find(movie => movie.id === props.movie_id)
        }
     */
}

const mapDispatchToProps = dispatch => ({
    EditMovieToStore: payload => dispatch(editMovieAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);