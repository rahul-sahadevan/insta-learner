import { configureStore } from "@reduxjs/toolkit";
import courseFetchingSlice from "./actions/courseFetchingSlice";
import thunk from "redux-thunk";


const store = configureStore({
    reducer:{
        courses:courseFetchingSlice
    },
    middleware:[thunk]
})

export default store