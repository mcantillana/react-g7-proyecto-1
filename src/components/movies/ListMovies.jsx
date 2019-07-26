import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteMovieAction } from '../../store/movies/action';
import { Link } from 'react-router-dom';

import SectionToolbar from '../common/SectionToolbar';
import Title from '../common/Title';
import SectionTitle from '../common/SectionTitle';
import FormInput from './forms_utils/FormInput';
import FormSelect from './forms_utils/FormSelect';
import { genders, years, clasifications } from '../../store/movies/initialState';


const ListMovies = props => {

    const { movies } = props; 

    const handlerOnDeleteMovie = (index, event) => {
        event.preventDefault();
        props.deleteMovieToStore(movies[index]);

    }
    
    const [ query, setQuery ] = useState({
      name: '',
      gender: '',
      year: '',
      clasification: '',
      director: '',
    });

    const handlerOnChange = ({target}) => {      
      setQuery({...query, [target.name]: target.value })
    }

    const filtrate = q => {

      let filteredMovies = movies.filter(
        movie => movie.name.includes(q.name)
      )

      filteredMovies = filteredMovies.filter(
        movie => movie.gender.includes(q.gender)
      )

      filteredMovies = filteredMovies.filter(
        movie => movie.year.toString().includes(q.year)
      )

      filteredMovies = filteredMovies.filter(
        movie => movie.clasification.includes(q.clasification)
      )
      filteredMovies = filteredMovies.filter(
        movie => movie.director.includes(q.director)
      )

      return filteredMovies;

    }
    
    const filteredMovies = filtrate(query);

    return (
      <React.Fragment>
          <SectionTitle>
              <Title title="List details" />
              <SectionToolbar>
                <div className="add-box ">
                  <Link to="/new" className="btn btn-primary float-right">
                  <i className="fas fa-plus"></i> Add Movie</Link>
                </div>
              </SectionToolbar>
          </SectionTitle>
          
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Year</th>
                <th scope="col">Clasification</th>
                <th scope="col">Director</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td>

                  <FormInput 
                    className="form-control-sm" 
                    name="name" 
                    value={query.name} 
                    handlerOnChange={handlerOnChange}
                  />

                </td>
                <td>
                  <FormSelect 
                    handlerOnChange={handlerOnChange}
                    name="gender"
                    value={query.gender}
                    options={genders.map(gender => ({'name': gender, 'value': gender}))}
                    className="form-control-sm" 
                  />

                </td>
                <td>

                  <FormSelect 
                    handlerOnChange={handlerOnChange}
                    name="year"
                    value={query.year}
                    options={years()}
                    className="form-control-sm" 
                  />

                </td>
                <td>

                  <FormSelect 
                    handlerOnChange={handlerOnChange}
                    name="clasification"
                    value={query.clasification}
                    options={clasifications}
                    className="form-control-sm" 
                  />

                </td>
                <td>
                  <FormInput 
                    className="form-control-sm" 
                    name="director" 
                    value={query.director} 
                    handlerOnChange={handlerOnChange}
                  />
                </td>
                <td></td>
              </tr>
              {
                  filteredMovies.map((movie, index) => 
                      <tr key={index}>
                        <td>{movie.name}</td>
                        <td>{movie.gender}</td>
                        <td>{movie.year}</td>
                        <td>{movie.clasification}</td>
                        <td>{movie.director}</td>
                        <td>                          
                          <Link to={`edit/${movie.id}`} className="edit" title="Edit" data-toggle="tooltip">
                            <i className="material-icons">&#xE254;</i>
                          </Link>
                          <a href="/#" className="delete" title="Delete" data-toggle="tooltip" onClick={(e) => { if (window.confirm(`Estas seguro de eliminar ${movie.name}?`)) handlerOnDeleteMovie(index, e) } }>
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                  )
              }
            </tbody>
          </table>
      </React.Fragment>      
        
    );
}


const mapStateToProps = GlobalState => {

    return {
        ...GlobalState.movies
    }
}


const mapDispatchToProps = dispatch => ({
    deleteMovieToStore: payload => dispatch(deleteMovieAction(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);