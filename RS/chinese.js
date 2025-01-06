// Recipe details data with detailed preparation steps
const recipes = {
    'Sweet and Sour Chicken': {
        ingredients: ['Chicken breast', 'Bell peppers', 'Pineapple', 'Soy sauce', 'Vinegar', 'Sugar'],
        preparation: [
            '1. Cut chicken breasts into bite-sized cubes.',
            '2. In a bowl, mix soy sauce, vinegar, and sugar to create the sauce.',
            '3. Heat a pan over medium heat and add a bit of oil. Stir-fry the chicken pieces until they turn golden brown.',
            '4. Add chopped bell peppers and pineapple pieces to the pan. Stir well.',
            '5. Pour the prepared sauce into the pan and cook for another 5-7 minutes, allowing the sauce to thicken.',
            '6. Serve hot with steamed rice.'
        ]
    },
    'Kung Pao Chicken': {
        ingredients: ['Chicken breast', 'Peanuts', 'Chili peppers', 'Soy sauce', 'Vinegar', 'Garlic'],
        preparation: [
            '1. Cut the chicken breast into small, bite-sized cubes.',
            '2. Heat some oil in a pan and stir-fry the chicken pieces until golden brown. Remove the chicken and set it aside.',
            '3. In the same pan, add chopped garlic and dried chili peppers. Stir-fry for 1-2 minutes.',
            '4. Add roasted peanuts and cook for another 2 minutes.',
            '5. Add the cooked chicken back into the pan.',
            '6. Mix soy sauce and vinegar in a bowl, then pour it over the chicken mixture. Stir everything together.',
            '7. Cook for another 2-3 minutes until the sauce thickens. Serve with rice.'
        ]
    },
    'Spring Rolls': {
        ingredients: ['Spring roll wrappers', 'Cabbage', 'Carrots', 'Shrimp', 'Soy sauce', 'Garlic'],
        preparation: [
            '1. Finely shred the cabbage and carrots.',
            '2. Stir-fry shrimp with garlic in a pan for 2-3 minutes until cooked.',
            '3. Add the shredded cabbage and carrots to the pan and stir-fry for another 3-4 minutes.',
            '4. Season the mixture with soy sauce and stir well.',
            '5. Let the filling cool before wrapping it in the spring roll wrappers.',
            '6. Heat oil in a pan and deep fry the rolls until they are golden brown.',
            '7. Serve with dipping sauce.'
        ]
    },
    'Fried Rice': {
        ingredients: ['Rice', 'Eggs', 'Carrots', 'Peas', 'Soy sauce', 'Green onions'],
        preparation: [
            '1. Cook rice and let it cool (preferably use day-old rice for the best texture).',
            '2. Heat a little oil in a pan and scramble the eggs until fully cooked. Set aside.',
            '3. In the same pan, stir-fry diced carrots and peas for 3-4 minutes.',
            '4. Add the cooled rice into the pan and stir well.',
            '5. Add soy sauce and mix thoroughly.',
            '6. Stir in the scrambled eggs and chopped green onions.',
            '7. Cook for another 2-3 minutes, then serve hot.'
        ]
    },
    'General Tso\'s Chicken': {
        ingredients: ['Chicken breast', 'Soy sauce', 'Vinegar', 'Sugar', 'Ginger', 'Garlic'],
        preparation: [
            '1. Cut the chicken into bite-sized pieces and marinate it in soy sauce for 15 minutes.',
            '2. In a small bowl, mix soy sauce, vinegar, sugar, minced ginger, and garlic to make the sauce.',
            '3. Heat oil in a pan and fry the chicken pieces until crispy and golden brown.',
            '4. Remove the chicken and set aside. In the same pan, cook the sauce mixture for 2-3 minutes.',
            '5. Add the fried chicken back into the pan and toss to coat it in the sauce.',
            '6. Cook for another 3-4 minutes to allow the sauce to thicken and absorb into the chicken.',
            '7. Serve hot with steamed rice.'
        ]
    },
    'Egg Foo Young': {
        ingredients: ['Eggs', 'Green onions', 'Shrimp', 'Soy sauce', 'Mushrooms'],
        preparation: [
            '1. Beat eggs in a bowl and add chopped green onions, shrimp, and diced mushrooms.',
            '2. Heat a little oil in a frying pan and pour the egg mixture into the pan.',
            '3. Fry the mixture on medium heat until the bottom is golden brown, then flip to cook the other side.',
            '4. Remove the egg foo young from the pan and set aside.',
            '5. In a small pot, make the gravy by mixing soy sauce, water, and a little cornstarch. Bring to a boil.',
            '6. Pour the gravy over the egg foo young and serve.'
        ]
    },
    'Hot and Sour Soup': {
        ingredients: ['Tofu', 'Mushrooms', 'Vinegar', 'Soy sauce', 'Chili paste', 'Eggs'],
        preparation: [
            '1. In a pot, combine water, sliced mushrooms, tofu, and soy sauce. Bring it to a simmer.',
            '2. Stir in vinegar, chili paste, and a bit of sugar to balance the flavors.',
            '3. Beat the eggs and slowly pour them into the soup, stirring constantly to form silky ribbons.',
            '4. Taste the soup and adjust the seasoning with more soy sauce or vinegar if needed.',
            '5. Serve hot with fresh herbs or green onions as garnish.'
        ]
    },
    'Chop Suey': {
        ingredients: ['Chicken', 'Beef', 'Shrimp', 'Bamboo shoots', 'Soy sauce', 'Cabbage'],
        preparation: [
            '1. Cut chicken, beef, and shrimp into small pieces.',
            '2. Stir-fry the meats separately until cooked through. Remove and set aside.',
            '3. In the same pan, add bamboo shoots and shredded cabbage. Stir-fry for 3-4 minutes.',
            '4. Return the cooked meats to the pan and add soy sauce to taste.',
            '5. Stir everything together and cook for an additional 2-3 minutes.',
            '6. Serve hot with steamed rice.'
        ]
    },
    'Beef with Broccoli': {
        ingredients: ['Beef', 'Broccoli', 'Soy sauce', 'Garlic', 'Ginger'],
        preparation: [
            '1. Slice the beef into thin strips and marinate in soy sauce for 10 minutes.',
            '2. Heat oil in a pan and stir-fry minced garlic and ginger for 1-2 minutes.',
            '3. Add the marinated beef to the pan and stir-fry for 4-5 minutes until cooked.',
            '4. Add broccoli florets and cook until tender.',
            '5. Stir in more soy sauce and cook for another 2 minutes.',
            '6. Serve hot with steamed rice.'
        ]
    },
    'Orange Chicken': {
        ingredients: ['Chicken breast', 'Orange juice', 'Soy sauce', 'Sugar', 'Garlic', 'Ginger'],
        preparation: [
            '1. Cut chicken into bite-sized pieces and marinate in soy sauce for 15 minutes.',
            '2. In a pan, heat oil and fry the chicken pieces until golden brown.',
            '3. Remove the chicken and set aside. In the same pan, add garlic and ginger and stir-fry for 1 minute.',
            '4. Add orange juice, sugar, and soy sauce to the pan and bring to a boil.',
            '5. Add the fried chicken back to the pan and stir to coat the chicken in the sauce.',
            '6. Cook for 2-3 minutes until the sauce thickens.',
            '7. Serve hot with steamed rice.'
        ]
    },
    'Dim Sum': {
        ingredients: ['Dumpling wrappers', 'Pork', 'Shrimp', 'Soy sauce', 'Ginger'],
        preparation: [
            '1. Make the filling by mixing minced pork, shrimp, soy sauce, and grated ginger.',
            '2. Place small portions of the filling in the center of dumpling wrappers.',
            '3. Fold the wrappers over the filling and seal them tightly.',
            '4. Steam the dumplings for 10-12 minutes until they are cooked through.',
            '5. Serve with soy sauce or dipping sauce of your choice.'
        ]
    },
    'Peking Duck': {
        ingredients: ['Duck', 'Soy sauce', 'Honey', 'Five-spice powder', 'Green onions', 'Cucumber'],
        preparation: [
            '1. Rub the duck with a mixture of soy sauce, honey, and five-spice powder.',
            '2. Roast the duck in an oven at 350°F (175°C) for about 1.5 hours, or until the skin is crispy.',
            '3. Once the duck is roasted, let it rest for 10 minutes before carving.',
            '4. Serve with thin pancakes, sliced cucumber, green onions, and hoisin sauce.'
        ]
    }
};

// Function to show recipe details
function showRecipeDetails(recipeName) {
    const recipe = recipes[recipeName];
    
    if (recipe) {
        // Display recipe details
        document.getElementById('recipe-name').innerText = recipeName;
        document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('preparation-steps').innerHTML = recipe.preparation.join('<br>');

        // Show recipe details section
        document.getElementById('recipe-details').style.display = 'block';
    }
}
