import React from 'react';

// import components
import Layout from '../components/common/Layout';
import EditMovie from '../components/movies/EditMovie';


const EditMoviePage = props => {
       
    return (
        <Layout>
            <EditMovie movie_id={props.match.params.id}/>
        </Layout>
    );

}


export default EditMoviePage;