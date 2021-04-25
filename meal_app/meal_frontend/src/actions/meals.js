import axios from 'axios';
import { createMessage } from './messages'

import { GET_MEALS, DELETE_MEAL, ADD_MEAL, GET_ERRORS } from './types';

// GET MEALS
export const getMeals = () => dispatch => {
    axios
     .get('/api/meal_api/')
     .then(res => {
         dispatch({
             type: GET_MEALS,
             payload: res.data
         });

     }).catch(err => console.log(err));

};

//DELETE MEAL
export const deleteMeal = (id) => dispatch => {
    axios
     .delete(`/api/meal_api/${id}/`)
     .then(res => {
         dispatch(createMessage({ mealDeleted: "Meal Deleted"}));
         dispatch({
             type: DELETE_MEAL,
             payload: id
         });

     }).catch(err => console.log(err));

};

//ADD MEAL
export const addMeal = (meal) => dispatch => {
    axios
     .post("/api/meal_api/", meal)
     .then(res => {
         dispatch(createMessage({ addMeal: "Meal Added"}));
         dispatch({
             type: ADD_MEAL,
             payload: res.data
         });

     }).catch(err => {
         const errors = {
             msg: err.response.data,
             status: err.response.status
         }
         dispatch({
             type: GET_ERRORS,
             payload: errors
         });
     });

};