import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';


const FormMovie = props => {

    const { movie, handlerOnSubmit, handlerOnChange, LabelBtn } = props;

    const genders = [
      'Acción',
      'Anime',
      'Documentales',
      'Dramas',
      'Comedias',
      'Infantil',
      'Terror',
      'Musicales',
      'Romance',
      'Otro',
    ]
  
    /* Generate years for select input. */
    const years = () => {
      const current_year = new Date().getFullYear();
      const _years = []
      for(let i=1960;i<=current_year;i++) {
          _years.push({name: i, value: i})
      }
            return _years;
    }

    const clasifications = [
      {value: 'ATP', name:' Apto para todo el público'},
      {value: '+13', name:'Apta para mayores de 13 años'},
      {value: '+16', name:'Apta para mayores de 16 años'},
      {value: '+18', name:'Apta para mayores de 18 años'},
      {value: 'C', name:'Exhibición condicionada'},
    ]


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