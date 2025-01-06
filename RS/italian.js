// Recipe details data with detailed preparation steps
const recipes = {
    'Spaghetti Carbonara': {
        ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Guanciale', 'Black pepper', 'Salt'],
        preparation: [
            '1. Bring a large pot of salted water to a boil and cook the spaghetti until al dente, about 9-10 minutes.',
            '2. In a separate pan, cook guanciale over medium heat until crispy and golden, about 5-7 minutes.',
            '3. While the pasta and guanciale cook, whisk together the eggs and Parmesan cheese in a bowl until combined.',
            '4. When the pasta is ready, reserve 1 cup of pasta water and drain the pasta.',
            '5. Toss the cooked spaghetti in the pan with the guanciale, making sure the pasta is coated in the rendered fat.',
            '6. Quickly add the egg and cheese mixture, stirring constantly, to create a creamy sauce.',
            '7. If the sauce seems too thick, add reserved pasta water a little at a time until you reach the desired consistency.',
            '8. Season with freshly ground black pepper and salt to taste.',
            '9. Serve immediately with extra Parmesan cheese on top.'
        ]
    },
    'Margherita Pizza': {
        ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Fresh basil', 'Olive oil', 'Salt'],
        preparation: [
            '1. Preheat the oven to 475°F (245°C). If using a pizza stone, place it in the oven while it heats.',
            '2. Roll out the pizza dough on a floured surface to your desired size, about 12 inches in diameter.',
            '3. Spread a thin layer of tomato sauce on the dough, leaving a small border around the edges.',
            '4. Tear mozzarella cheese into chunks and scatter it over the sauce.',
            '5. Sprinkle a pinch of salt over the top, then drizzle with a little olive oil.',
            '6. Transfer the pizza to a preheated baking sheet or pizza stone and bake for 10-12 minutes, until the crust is golden and the cheese is melted and bubbly.',
            '7. Remove the pizza from the oven and top with fresh basil leaves.',
            '8. Drizzle with a little more olive oil before serving.'
        ]
    },
    'Lasagna': {
        ingredients: ['Lasagna noodles', 'Ground beef', 'Tomato sauce', 'Ricotta cheese', 'Mozzarella cheese', 'Parmesan cheese', 'Eggs', 'Garlic', 'Onion'],
        preparation: [
            '1. Preheat the oven to 375°F (190°C).',
            '2. Cook lasagna noodles according to package instructions, then drain and set aside.',
            '3. In a pan, cook ground beef, garlic, and onion until browned, about 5-7 minutes.',
            '4. Add tomato sauce to the beef mixture and simmer for 10 minutes. Season with salt and pepper to taste.',
            '5. In a separate bowl, mix ricotta cheese, eggs, and Parmesan cheese to create a creamy filling.',
            '6. In a baking dish, spread a thin layer of meat sauce on the bottom.',
            '7. Layer cooked lasagna noodles, followed by a layer of the ricotta mixture and a layer of mozzarella cheese.',
            '8. Repeat the layers, finishing with a layer of mozzarella on top.',
            '9. Cover the lasagna with foil and bake for 40 minutes. Remove the foil and bake for another 10-15 minutes until the top is golden and bubbly.',
            '10. Let the lasagna cool for 10 minutes before slicing and serving.'
        ]
    },
    'Risotto': {
        ingredients: ['Arborio rice', 'Chicken broth', 'Onion', 'Parmesan cheese', 'White wine', 'Butter'],
        preparation: [
            '1. In a large pot, melt butter over medium heat and sauté the chopped onion until soft and translucent, about 5 minutes.',
            '2. Add Arborio rice and cook, stirring constantly, for 2-3 minutes until the rice is lightly toasted.',
            '3. Pour in the white wine and stir until it is absorbed by the rice.',
            '4. Gradually add warm chicken broth, about 1/2 cup at a time, stirring constantly and allowing the liquid to be absorbed before adding more.',
            '5. Continue adding broth and stirring until the rice is tender and creamy, about 20-25 minutes.',
            '6. Stir in Parmesan cheese and a little more butter for extra creaminess.',
            '7. Season with salt and pepper to taste and serve immediately.'
        ]
    },
    'Fettuccine Alfredo': {
        ingredients: ['Fettuccine', 'Butter', 'Heavy cream', 'Parmesan cheese', 'Garlic'],
        preparation: [
            '1. Cook fettuccine in a large pot of salted water until al dente, about 8-10 minutes.',
            '2. In a separate pan, melt butter over medium heat. Add minced garlic and sauté until fragrant, about 1 minute.',
            '3. Pour in heavy cream and bring to a simmer, stirring occasionally.',
            '4. Reduce the heat and add grated Parmesan cheese, stirring until the sauce thickens and becomes smooth.',
            '5. Drain the cooked fettuccine and add it to the sauce, tossing to coat the pasta evenly.',
            '6. If the sauce is too thick, add a little pasta water to thin it out.',
            '7. Serve immediately with extra Parmesan cheese on top.'
        ]
    },
    'Minestrone Soup': {
        ingredients: ['Carrots', 'Celery', 'Tomatoes', 'Cannellini beans', 'Pasta', 'Vegetable broth', 'Spinach'],
        preparation: [
            '1. In a large pot, sauté diced carrots, celery, and onion until softened, about 5 minutes.',
            '2. Add diced tomatoes and cook for another 2 minutes.',
            '3. Pour in vegetable broth and bring to a simmer.',
            '4. Add cannellini beans and small pasta (like ditalini or elbow macaroni) to the soup.',
            '5. Simmer until the pasta is tender, about 10 minutes.',
            '6. Stir in fresh spinach and cook until wilted.',
            '7. Season with salt, pepper, and dried herbs like thyme or basil to taste.',
            '8. Serve hot with grated Parmesan on top.'
        ]
    },
    'Caprese Salad': {
        ingredients: ['Tomatoes', 'Mozzarella', 'Fresh basil', 'Olive oil', 'Balsamic vinegar'],
        preparation: [
            '1. Slice tomatoes and mozzarella into 1/4-inch thick slices.',
            '2. Arrange the tomato and mozzarella slices in an alternating pattern on a serving platter.',
            '3. Tear fresh basil leaves and scatter them over the tomatoes and cheese.',
            '4. Drizzle olive oil and balsamic vinegar over the salad.',
            '5. Sprinkle with salt and freshly ground black pepper.',
            '6. Serve immediately or chill for 10-15 minutes before serving.'
        ]
    },
    'Bruschetta': {
        ingredients: ['Baguette', 'Tomatoes', 'Garlic', 'Basil', 'Olive oil', 'Balsamic vinegar'],
        preparation: [
            '1. Slice the baguette into 1/2-inch thick slices.',
            '2. Toast the bread slices on a grill or in a toaster until golden brown.',
            '3. Dice tomatoes and mix them with chopped garlic, basil, olive oil, and a drizzle of balsamic vinegar.',
            '4. Spoon the tomato mixture onto the toasted baguette slices.',
            '5. Serve immediately as an appetizer or snack.'
        ]
    },
    'Gnocchi': {
        ingredients: ['Potatoes', 'Flour', 'Eggs', 'Parmesan cheese'],
        preparation: [
            '1. Boil the potatoes until soft, about 20 minutes. Let them cool slightly, then peel.',
            '2. Mash the potatoes until smooth, and transfer them to a large bowl.',
            '3. Add flour, eggs, and Parmesan cheese to the mashed potatoes and mix until a dough forms.',
            '4. Roll the dough into long ropes and cut into 1-inch pieces.',
            '5. Use a fork to gently press each piece to create ridges.',
            '6. Boil the gnocchi in salted water until they float to the surface, about 2-3 minutes.',
            '7. Remove the gnocchi with a slotted spoon and serve with your favorite sauce.'
        ]
    },
    'Osso Buco': {
        ingredients: ['Veal shanks', 'Tomatoes', 'Onion', 'Carrot', 'Celery', 'White wine', 'Beef broth'],
        preparation: [
            '1. Season veal shanks with salt and pepper, then brown them in a large pan over medium-high heat.',
            '2. Remove the veal from the pan and set aside.',
            '3. In the same pan, sauté onions, carrots, and celery until softened, about 5 minutes.',
            '4. Add chopped tomatoes, white wine, and beef broth, scraping up any browned bits from the bottom of the pan.',
            '5. Return the veal to the pan and bring to a simmer.',
            '6. Cover and cook for 2-3 hours until the veal is tender and falling off the bone.'
        ]
    },
    'Risotto alla Milanese': {
        ingredients: ['Arborio rice', 'Saffron', 'Chicken broth', 'Parmesan cheese', 'Butter'],
        preparation: [
            '1. Sauté chopped onion in butter over medium heat until soft.',
            '2. Add the rice and cook for 2 minutes, stirring constantly.',
            '3. Add saffron and warm chicken broth, one ladle at a time, stirring constantly and allowing each addition to be absorbed before adding more.',
            '4. Once the rice is tender and creamy, stir in Parmesan cheese and serve.'
        ]
    },
    'Tiramisu': {
        ingredients: ['Mascarpone cheese', 'Ladyfingers', 'Espresso', 'Cocoa powder', 'Eggs', 'Sugar'],
        preparation: [
            '1.In a bowl, whisk egg yolks with sugar until smooth.',
            '2.Mix in mascarpone cheese until creamy.',
            '3.Dip ladyfingers quickly in espresso and layer them in a dish.',
            '4.Spread half of the mascarpone mixture over the ladyfingers.',
            '5.Repeat layers and refrigerate for at least 4 hours.',
            '6.Dust with cocoa powder before serving.'
        ]
    }
};

// Function to show recipe details
function showRecipeDetails(recipeName) {
    const recipe = recipes[recipeName];
    document.getElementById('recipe-name').textContent = recipeName;
    document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    document.getElementById('preparation-steps').innerHTML = recipe.preparation.join('<br>');
    document.getElementById('recipe-details').style.display = 'block';
}

// Function to close recipe details
function closeRecipeDetails() {
    document.getElementById('recipe-details').style.display = 'none';
}
