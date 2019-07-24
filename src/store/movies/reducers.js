import { initialState } from './initialState';
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from './const';


export default function reducer(state = initialState, action) {
    
    switch(action.type) {
        case ADD_MOVIE: 
            return {
                ...state,
                movies: state.movies.concat(action.payload)
            }
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(
                    movie => movie.id !== action.payload.id
                )
            }

        case EDIT_MOVIE:
            console.log('EDIT_MOVIE', state.movies)
            return {
                ...state,
                movies: state.movies.map(movie => {
                            if (movie.id === action.payload.id) {
                                
                                return {
                                    ...movie,
                                    director: action.payload.director,
                                    duration: action.payload.duration,
                                    gender: action.payload.gender,
                                    name: action.payload.name,
                                    year: action.payload.year,
                                }
                            } else {
                                return movie
                            }
                        })
            }
            



        default:
            return state;
    }
}


// return state.map((post)=>{
//         if(post.id === action.id) {
//           return {
//              ...post,
//              title:action.data.newTitle,
//              message:action.data.newMessage,
//              editing: !post.editing
//           }
//         } else return post;
//       })