import { createSlice } from "@reduxjs/toolkit";


const courseFetchingSlice  = createSlice({
    name:'courses',
    initialState:{
        fetchLoading:false,
        fetchData:[],
        actualData:[],
        enrolledCourses:{
            courses:[],
            isEnrolled:false
        },
        fetchError:null,
        individualCourse:{},
        completed:false
    },

    reducers:{
        dataLoading:(state)=>{
            state.fetchLoading = true;
        },
        dataFetched:(state,action)=>{
            state.fetchLoading=false;
            state.fetchData = action.payload;
            state.actualData = action.payload
        },
        dataError:(state,action)=>{
            state.fetchLoading = false;
            state.fetchError = action.payload;
        },
        searchResult:(state,action)=>{
            if(action.payload){
                state.fetchData = state.actualData.filter((item) =>
                 item.name.toLowerCase().includes(action.payload.toLowerCase()) || 
                 item.instructor.toLowerCase().includes(action.payload.toLowerCase())
                 )
            }
            else{
                state.fetchData = state.actualData
            }
        },
        selectedCourse : (state,action)=>{
            if(action.payload){
                state.individualCourse = action.payload;
            }
        },
        enrolledCourse: (state,action)=>{
            if(action.payload && (action.payload.courses.enrollmentStatus === 'Open' || 
            action.payload.courses.enrollmentStatus === 'In Progress')){
                let temp = [...state.enrolledCourses.courses];

                temp = temp.filter((item)=> item.id != action.payload.courses.id)
                temp = [...temp,action.payload.courses]

                state.enrolledCourses.courses = [...temp]
                state.enrolledCourses.isEnrolled = true
            }
        },
        complete:(state,action)=>{
            state.completed = action.payload
            
        }
    }
})

export const {dataLoading,dataFetched,dataError,searchResult,selectedCourse,enrolledCourse,complete} = courseFetchingSlice.actions

export default courseFetchingSlice.reducer