import React from 'react';
import { connect } from 'react-redux';
import { deleteMovieAction } from '../../store/movies/action';
import { Link } from 'react-router-dom';

import SectionToolbar from '../common/SectionToolbar';
import Title from '../common/Title';
import SectionTitle from '../common/SectionTitle';


const ListMovies = props => {

    const { movies } = props; 

    const handlerOnDeleteMovie = (index, event) => {
        event.preventDefault();
        props.deleteMovieToStore(movies[index]);

    }
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
                <td><input type="text" className="form-control form-control-sm"/></td>
                <td><input type="text" className="form-control form-control-sm"/></td>
                <td><input type="text" className="form-control form-control-sm"/></td>
                <td><input type="text" className="form-control form-control-sm"/></td>
                <td><input type="text" className="form-control form-control-sm"/></td>
                <td></td>
              </tr>
              {
                  movies.map((movie, index) => 
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
                          <a href="#" className="delete" title="Delete" data-toggle="tooltip" onClick={(e) => { if (window.confirm(`Estas seguro de eliminar ${movie.name}?`)) handlerOnDeleteMovie(index, e) } }>
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


const mapStateToProps = state => {
    return {
        ...state.movies
    }
}


const mapDispatchToProps = dispatch => ({
    deleteMovieToStore: payload => dispatch(deleteMovieAction(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListMovies);