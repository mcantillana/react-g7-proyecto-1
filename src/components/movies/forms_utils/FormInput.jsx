import React from 'react';


const FormInput = props => {

    const { name, value, label, placeholder, required, handlerOnChange } = props;

    return (
          <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" required={required} onChange={handlerOnChange} className="form-control form-control-lg" id={name}  placeholder={placeholder} name={name} value={value} />
          </div>
    );
}


export default FormInput;