import React from 'react';

const Title = props => {

    return (
        <div className="col-6">
            <h2><strong>Movies</strong> {props.title}</h2>
        </div>
    );
}

export default Title;