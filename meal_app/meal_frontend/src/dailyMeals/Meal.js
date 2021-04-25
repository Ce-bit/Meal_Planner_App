import React, {useState, useEffect} from "react";

export default function Meal({meal}){
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d17305ebeaa24898a370216e0a2e0b6f&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image)
        })
        .catch(() => {
            console.log("error")
        })
    }, [meal.id])

    return <article>
        <h1>{meal.title}</h1>
        <img src = {imageUrl} alt = "recipe" />
        <ul className = "instructions">
            <li>Preparation Time: {meal.readyInMinutes} minutes</li>
            <li>Number of Servings: {meal.servings}</li>
        </ul>
        <a href = {meal.sourceUrl}>Go to Recipe </a>
    </article>

}