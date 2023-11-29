// creating a state management system using redux toolkit----------------
import { createSlice } from "@reduxjs/toolkit";

// creating a slice ---------------------------
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
        
    },
// reducer functions ---------------------------
    reducers:{
        // loading function
        dataLoading:(state)=>{
            state.fetchLoading = true;
        },
        // fetching fnction
        dataFetched:(state,action)=>{
            state.fetchLoading=false;
            state.fetchData = action.payload;
            state.actualData = action.payload
        },
        // error handling fnction
        dataError:(state,action)=>{
            state.fetchLoading = false;
            state.fetchError = action.payload;
        },
        // search handling funtion
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
        // selected course function
        selectedCourse : (state,action)=>{
            if(action.payload){
                state.individualCourse = action.payload;
            }
        },
        // function to handle enrolled courses array
        enrolledCourse: (state,action)=>{
            if(action.payload && (action.payload.courses.enrollmentStatus === 'Open' || 
            action.payload.courses.enrollmentStatus === 'In Progress')){
                //temp array to avoiding dulication
                state.individualCourse = {...state.individualCourse,isEnrolled:true}
                let temp = [...state.enrolledCourses.courses];

                temp = temp.filter((item)=> item.id != action.payload.courses.id)
                temp = [...temp,action.payload.courses]

                state.enrolledCourses.courses = [...temp]
                state.enrolledCourses.isEnrolled = true
            }
            else{
                alert('Enrollment Closed !')
            }
        },
        // function to handle completion status
        complete:(state,action)=>{
            const courseId = action.payload.courseId;
            const isCompleted = action.payload.isCompleted;

            // Update the completion status for the specific course
            state.enrolledCourses.courses = state.enrolledCourses.courses.map(course =>
                course.id === courseId ? { ...course, completed: isCompleted } : course
            );
            
        },
       
    }
})

export const {dataLoading,dataFetched,dataError,searchResult,selectedCourse,enrolledCourse,complete} = courseFetchingSlice.actions

export default courseFetchingSlice.reducer