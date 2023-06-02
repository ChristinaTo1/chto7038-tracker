//This is the setup for the form in create.html//

//Function for putting the data from the completed form into a JS object//

let recipes = [];

    const addRecipe = (ev)=>{
        ev.preventDefault();
        let recipe = {
            title: document.getElementById('RN-textbox').value,
            description: document.getElementById('RD-textbox').value,
            courseCategory: document.getElementById('course-name'),value,
            recipeTag: document.getElementById('tag-name').value,
            servingSize: document.getElementById('serving-size-input').value,
            prepTime: document.getElementById('prep-time-input').value,
            cookingTime: document.getElementById('cooking-time-input').value,
            nutritionalValue: document.getElementById('nutrition-textbox').value,
            ingredients: document.getElementById('ingredient-textbox').value,
            notes: docuemnt.getElementById('note-textbox').value
        }
        recipes.push(recipe);

//This would reset the form once its completed//
        document.querySelector('recipe-creation-form').reset;

//Wanted to store the object in local storage so that it could be used elsewhere//
        localStorage.setItem('UserRecipeList',JSON.stringify(recipes));
    }

//When the user submits the form, it would add the data from the form into an JS object//
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('save-recipe-button').addEventListener('click', addRecipe);
});

//I wanted to be able to refer back to this object in the index.html file and display the data entered//
//onto the index.html file as a pop up after the user clicks on an icon of the recipe that they have just created//

//I wanted to do this by retrieving the JS object by creating a variable in the index.html://
//var recipe = JSON.parse(localStorage.getItem('UserReciptList'))//