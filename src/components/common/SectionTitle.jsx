import React from 'react';

const SectionTitle = props => {

    return (
       <div className="table-title container-title">
            <div className="row">
                {props.children}
            </div>
            <hr/>
        </div>
    );
}

export default SectionTitle;