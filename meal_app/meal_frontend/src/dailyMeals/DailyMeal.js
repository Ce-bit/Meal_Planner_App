import React, {useState} from "react"
import MealList from "./MealList"
import './DailyMeal.css';
import { Redirect } from 'react-router-dom';



function DailyMeal() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e){
    setCalories(e.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=bdcf2686fc9c4f0ab8b69e749d440400&timeFrame=day&targetCalories=${calories}`
      )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function goToMealList(){
    window.location.href = '/#/mealList';
  }

  return <div className = "App mx-auto">
    <section className = "controls">
      <div className="input-group mb-3 mx-auto" style={{width: "500px"}}> 
        <span className="input-group-text">Enter Calories</span>
        <input type="number" className="form-control" aria-label="Calories (e.g 2000)" onChange={handleChange}/>
      </div>
      </section>

      <button onClick = {getMealData} className="btn btn-dark" >Get Daily Meal Plan  </button>
      <button onClick = {goToMealList} className="btn btn-dark" >Go to My Meal List </button>
      <div className = "mx-auto">
      {mealData && <MealList mealData = {mealData} />} 
      </div>
      
  </div>
}

export default DailyMeal;
