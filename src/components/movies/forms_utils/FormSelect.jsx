import React from 'react';


const FormSelect = props => {

    const { name, value, label, required, handlerOnChange, options } = props;

    return (
        <div className="form-group" required={required}>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} className="form-control form-control-lg" onChange={handlerOnChange}>
                <option value="">-- Select {label} ---</option>
                {options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)}
            </select>            
        </div>
    );
}


export default FormSelect;