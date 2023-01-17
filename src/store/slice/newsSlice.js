import { createSlice } from "@reduxjs/toolkit";
import {GetNews, GetNewsDetail} from "../../api/news.js";
const initialState = {
   news:[],
    isLoading: false,
    error: "",
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        fetchNews(state){
            state.isLoading = true
            state.error = ''
        },
        successFetchNews(state,action){
            state.news = action.payload
            state.isLoading = false
        },
        failureFetchNews(state){
            state.news = initialState.news;
            state.isLoading = false;
            state.error = 'Извините, что то пошло не так'
        }
        

    },
});

export const GetNewsAll = (
    page,limit,year
) => {
    return async (dispatch) => {
        dispatch(newsSlice.actions.fetchNews())
        try{
            const response = await GetNews(page,limit,year);
            dispatch(newsSlice.actions.successFetchNews(response));
        }catch(e){
            dispatch(newsSlice.actions.failureFetchNews())
        }
    };
};


export default newsSlice.reducer;
