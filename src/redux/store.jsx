import { configureStore } from "@reduxjs/toolkit";
import courseFetchingSlice from "./actions/courseFetchingSlice";
import thunk from "redux-thunk";

// store to store the reducers----------
const store = configureStore({
    reducer:{
        courses:courseFetchingSlice
    },
    middleware:[thunk]
})

export default store