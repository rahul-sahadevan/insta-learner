import { dataLoading,dataFetched,dataError } from "../actions/courseFetchingSlice";
import axios from "axios";

// function to fetch the courses from the dummy api created online 
export const courseFetcher = ()=>{
    return async function (dispatch){
        const url = 'https://demo0073398.mockable.io/master-class-courses'
        dispatch(dataLoading())
        try{
            const response = await axios.get(url)
            const data = response.data;
            dispatch(dataFetched(data.courses))

        }
        catch(error){
            dispatch(dataError(error))
        }

    }
}