import { createSlice } from "@reduxjs/toolkit";
import cocktails from "../../mockupData/cocktails";

export const cocktailSlice = createSlice({
    name: 'user',
    initialState: cocktails,
    reducers: {
        editCocktail: (state, action) => {
            const {id, glass, ingredients, recipe} = action.payload
            const foundCocktail = state.find(cocktail => cocktail.id === id)
            if (foundCocktail) {
                foundCocktail.glass = glass
                foundCocktail.ingredients = ingredients
                foundCocktail.recipe = recipe
            }
        }
    }
})

export const { editCocktail } = cocktailSlice.actions
export default cocktailSlice.reducer