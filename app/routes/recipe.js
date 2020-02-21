import express from "express";
import recipeController from "../controllers/recipe";

export default (app)=>{
    // recipe endpoints
    app.get("/api/v1/", (req, res)=> res.status(200).json({"Recipe API": "Healthy"}))
    app.get("/api/v1/recipe", recipeController.getRecipes);
    app.post("/api/v1/recipe", recipeController.addRecipe);   
}