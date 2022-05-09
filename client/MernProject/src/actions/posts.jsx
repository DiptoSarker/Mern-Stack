import { display } from '@mui/system';
import * as api from '../api';

// action creators

export const getPosts = () => async(dispatch)=>{
    try {
       const {data} = await api.fetchPosts();
       dispatch ({type: 'FETCH_ALL', payload: data});
    }
    catch (error){
       console.log(error.massage);
    }

}

export const createPost = (post) => async (dispatch) => {
   try {
      const {data} = await api.createPost(post);

      dispatch({type: 'CREATE', payload: data})
   } catch (error) {
      console.log(error);
   }
}