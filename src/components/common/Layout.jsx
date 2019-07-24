import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {

    return (
        <React.Fragment>        
        <Header />
        <section {...props}>
            <div className="container">
                <div className="container-wrapper">
                {props.children}
                </div>
            </div>
        </section>
        <Footer />
        </React.Fragment>
    );

}

export default Layout;