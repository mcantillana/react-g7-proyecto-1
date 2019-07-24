import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {

    return (
                
        <header className="page-header">
            <div className="container">
                <Link to="/"> 
                    <img src="http://blog.desafiolatam.com/wp-content/uploads/2019/02/logo.png" alt="Logo" title="Home page" className="logo" />
                </Link>
                <h1>Movies CRUD application</h1>
                <p><strong>React G7</strong> - Proyecto 01 / Miguel Cantillana</p>
            </div>
        </header>

    );
}


export default Header;