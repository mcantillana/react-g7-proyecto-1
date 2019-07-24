import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addMovieAction } from '../../store/movies/action';
import md5 from 'md5';

import FormMovie from './forms_utils/FormMovie';
import SectionTitle from '../common/SectionTitle';
import Title from '../common/Title';

const AddMovie = props => {

    const emptyMovie = {
        id: '',
        name: '',
        gender: '',
        year: '',
        clasification: '',
        director: '',
    }

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

        console.log(movie);
        props.addMovieToStore({
            ...movie,
            id: md5(movie.name + movie.year + movie.gender) 
        });
        setMovie(emptyMovie);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (

        <React.Fragment>

            <SectionTitle>
                <Title title="Add new"/>
            </SectionTitle>
            

            <div className="row">
                <div className="col">                              
                    <FormMovie 
                        handlerOnSubmit={handlerOnSubmit}
                        handlerOnChange={handlerOnChange}
                        movie={movie}
                        LabelBtn="Add Movie"
                    />
                </div>
            </div>

        </React.Fragment>

    );
}




const mapDispatchToProps = dispatch => ({
    addMovieToStore: payload => dispatch(addMovieAction(payload))
})

export default connect(null, mapDispatchToProps)(AddMovie);