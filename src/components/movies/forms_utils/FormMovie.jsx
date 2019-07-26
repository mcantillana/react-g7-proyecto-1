import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { genders, years, clasifications } from '../../../store/movies/initialState';

const FormMovie = props => {

    const { movie, handlerOnSubmit, handlerOnChange, LabelBtn } = props;

    return (
        <form onSubmit={handlerOnSubmit}>

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Name Movie"
            label="Name"
            name="name"
            value={movie.name}
          />

          <FormSelect 
            required={true}
            handlerOnChange={handlerOnChange}
            label="Gender"
            name="gender"
            value={movie.gender}
            options={genders.map(gender => ({'name': gender, 'value': gender}))}

          />

          <FormSelect 
            required={true}
            handlerOnChange={handlerOnChange}
            label="Year"
            name="year"
            value={movie.year}
            options={years()}

          />

          <FormSelect 
            required={true}
            handlerOnChange={handlerOnChange}
            label="Clasification"
            name="clasification"
            value={movie.clasification}
            options={clasifications}

          />


       {/*   <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" required onChange={handlerOnChange} className="form-control form-control-lg" id="duration"  placeholder="duration Movie" name="duration" value={movie.duration} />
          </div>
          */}

          <FormInput 
            required={true}
            handlerOnChange={handlerOnChange}
            placeholder="Name of director"
            label="Director"
            name="director"
            value={movie.director}
          />


        
          <div className="text-right">            
            <Link to="/" className="btn btn-secondary btn-lg ">Cancel</Link>
            <button type="submit" className="btn btn-primary btn-lg ml-2 ">{LabelBtn}</button>
          </div>
        </form>


    );
}


export default FormMovie;