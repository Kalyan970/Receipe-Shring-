// Get all recipe name elements
const recipeNames = document.querySelectorAll('.recipe-name');

// Add click event listener to each recipe name
recipeNames.forEach(recipe => {
    recipe.addEventListener('click', function() {
        // Get the recipe details from the clicked element's data attributes
        const name = recipe.getAttribute('data-name');
        const ingredients = recipe.getAttribute('data-ingredients');
        const instructions = recipe.getAttribute('data-instructions');
        
        // Display the recipe details in the recipeDetails section
        document.getElementById('recipeTitle').textContent = name;
        document.getElementById('recipeIngredients').innerHTML = ingredients;
        document.getElementById('recipeInstructions').innerHTML = instructions;

        // Show the recipeDetails section
        document.getElementById('recipeDetails').style.display = 'block';
    });
});

// Function to close the recipe details view
function closeDetails() {
    document.getElementById('recipeDetails').style.display = 'none';
}