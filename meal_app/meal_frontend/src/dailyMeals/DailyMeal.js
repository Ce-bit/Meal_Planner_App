import React, {useState} from "react"
import MealList from "./MealList"
import './DailyMeal.css';

function DailyMeal() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e){
    setCalories(e.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=d17305ebeaa24898a370216e0a2e0b6f&timeFrame=day&targetCalories=${calories}`
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

  return <div className = "App">
    <section className = "controls">
      <input 
      type = "number"
      placeholder = "Calories (e.g 2000)"
      onChange={handleChange} />
      </section>
      <button onClick = {getMealData}>Get Daily Meal Plan </button>
      {mealData && <MealList mealData = {mealData} />} 
  </div>
}

export default DailyMeal;
