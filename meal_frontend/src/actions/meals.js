import axios from 'axios';
import { createMessage } from './messages'
import { tokenConfig } from './auth'
import { GET_MEALS, DELETE_MEAL, ADD_MEAL, GET_ERRORS } from './types';

// GET MEALS
export const getMeals = () => (dispatch, getState) => {
    axios
     .get('/api/meal_api/' , tokenConfig(getState))
     .then(res => {
         dispatch({
             type: GET_MEALS,
             payload: res.data
         });

     }).catch(err => console.log(err));

};

//DELETE MEAL
export const deleteMeal = (id) => (dispatch, getState) => {
    axios
     .delete(`/api/meal_api/${id}/`, tokenConfig(getState))
     .then(res => {
         dispatch(createMessage({ mealDeleted: "Meal Deleted"}));
         dispatch({
             type: DELETE_MEAL,
             payload: id
         });
     }).catch(err => console.log(err));

};

//ADD MEAL
export const addMeal = (meal) => (dispatch, getState) => {
    axios
     .post("/api/meal_api/", meal, tokenConfig(getState))
     .then(res => {
         dispatch(createMessage({ addMeal: "Meal Added"}));
         dispatch({
             type: ADD_MEAL,
             payload: res.data
         });

     }).catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));

};