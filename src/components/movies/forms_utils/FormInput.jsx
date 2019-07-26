import React from 'react';


const FormInput = props => {

    const { name, value, label, handlerOnChange } = props;

    const required = props.required || false;
    const placeholder = props.placeholder || "";
    const className = props.className ? `form-control ${props.className}` : "form-control form-control-lg" ;

    return (
          <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                type="text" 
                required={required} 
                onChange={handlerOnChange} 
                className={className} 
                id={name}  
                placeholder={placeholder} 
                name={name} 
                value={value} />
          </div>
    );
}


export default FormInput;