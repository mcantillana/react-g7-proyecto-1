import React from 'react';


const FormSelect = props => {

    const { name, value, label, handlerOnChange, options } = props;

    const required = props.required || false;
    const className = props.className ? `form-control ${props.className}` : "form-control form-control-lg" ;



    return (
        <div className="form-group" required={required}>
            {label && <label htmlFor={name}>{label}</label>}
            <select name={name} value={value} className={className} onChange={handlerOnChange}>
                <option value="">-- Select {label} ---</option>
                {options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)}
            </select>            
        </div>
    );
}


export default FormSelect;