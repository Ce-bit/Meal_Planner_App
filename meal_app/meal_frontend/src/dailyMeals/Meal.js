import React, {useState, useEffect} from "react";

export default function Meal({meal}){
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bdcf2686fc9c4f0ab8b69e749d440400&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image)
        })
        .catch(() => {
            console.log("error")
        })
    }, [meal.id])

    return <div className="card mb-3 mx-auto" style={{width: "25rem"}}> 
        <img src = {imageUrl} className="card-img-top" alt = "recipe" />
        <div className="card-body">
        <h5 className="card-title">{meal.title}</h5>
        <ul className = "instructions list-group justify-content-center">
            <li className="list-group-item">Preparation Time: {meal.readyInMinutes} minutes</li>
            <li className="list-group-item">Number of Servings: {meal.servings}</li>
        </ul>
        <a href = {meal.sourceUrl} target="_blank" >Go to Recipe </a>
     </div>
    </div>

}