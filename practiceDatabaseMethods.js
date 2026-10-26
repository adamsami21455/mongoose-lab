const Recipe = require('./models/Recipe')
const connectToDB = require("./db.js")


connectToDB()

async function createRecipe(newRecipe) {
    try {
    const newRecipe = await Recipe.create({
        name: "Um Ali",
        instructions: "bake at 180C",
        prepTime: 120,
        difficulty: "Medium"
    })
    console.log(newRecipe)
    }
    catch (err) {
        console.log("Failed to create recipe.", err)
    }

}
createRecipe()

// get all recipe from the database
async function getAllRecipes() {
    const allRecipes = await Recipe.find()
    console.log(allRecipes)
}
getAllRecipes()

async function getRecipeById(id) {
    try {
    const oneRecipeById = await Recipe.findById('')

console.log(oneRecipeById)
    }
catch(err) {
    console.log("No recipe with this ID exists")
}
}
getRecipeById()

async function updateRecipe(recipeId, newRecipeData) {
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId,newRecipeData,{new:true})
    console.log(updatedRecipe)
}
updateRecipe('6adf5440229015fd110168f2',{prepTime:300})

async function deleteRecipe(recipeId) {
    try{
    const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
    console.log(deletedRecipe)
    }
    catch(err){
        console.log(err)
    }
}


deleteRecipe('6adf3e036c59029927c86d7c')