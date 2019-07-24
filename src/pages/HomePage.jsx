import React, { Component } from 'react';

// import components
import Layout from '../components/common/Layout';

import ListMovies from '../components/movies/ListMovies';



export default class HomePage extends Component {
    render() {
        return (
            <Layout>                    
                <ListMovies />    
            </Layout>
        );
    }
}
