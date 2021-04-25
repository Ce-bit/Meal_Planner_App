import React from "react";
import Meal from "./Meal";

export default function MealList({mealData}){
    const nutrients = mealData.nutrients;

    return <main>
        <section className = "nutrients mx-auto justify-content-center" >
            <h1>Macros</h1>
            <ul className="list-group mb-3 mx-auto justify-content-center">
             
                <li className="list-group-item">Calories: {nutrients.calories.toFixed(0)}</li>
                <li className="list-group-item">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                <li className="list-group-item">Fat: {nutrients.fat.toFixed(0)}</li>
                <li className="list-group-item">Protein: {nutrients.protein.toFixed(0)}</li>
            </ul>
        </section>

        <section className = "meals mx-auto mb-3 justify-content-center">
            {mealData.meals.map((meal) =>{
                return <Meal key={meal.id} meal={meal} />
            })}
        </section>
    </main>
}