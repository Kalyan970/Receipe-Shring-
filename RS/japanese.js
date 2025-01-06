const recipes = {
    sushi: {
        name: "Sushi",
        ingredients: [
            "2 cups sushi rice", 
            "1 sheet nori (seaweed)", 
            "1/2 cup vinegar", 
            "Fresh fish (salmon, tuna, etc.)", 
            "Cucumber, thinly sliced"
        ],
        preparation: [
            "Rinse the sushi rice under cold water and cook it according to the instructions.",
"Let the rice cool and mix it with vinegar to season it.",
"Cut the fish and vegetables (like cucumber) into thin strips.",
"Place a sheet of nori on a bamboo mat.",
"Spread a thin layer of the seasoned rice evenly over the nori sheet.",
"Add the fish and vegetables on top of the rice.",
"Roll the nori tightly using the bamboo mat.",
"Slice the roll into bite-sized pieces and serve with soy sauce.",
        ]
    },
    ramen: {
        name: "Ramen",
        ingredients: [
            "2 cups chicken broth", 
            "1 package ramen noodles", 
            "1 boiled egg", 
            "2 tbsp soy sauce", 
            "1 tsp sesame oil", 
            "Chopped scallions"
        ],
        preparation: [
            "Boil the ramen noodles according to the package instructions.",
'In a pot, heat the chicken broth, soy sauce, and sesame oil.',
'Once the broth is heated, add the cooked noodles to the pot and mix.',
'Serve with a boiled egg, chopped scallions, and any other desired toppings.',
        ]
    },
    tempura: {
        name: "Tempura",
        ingredients: [
            "Shrimp", 
            "Sweet potato", 
            "Zucchini", 
            "Tempura batter mix", 
            "Oil for frying"
        ],
        preparation: [
            "Peel and devein the shrimp. Slice the sweet potato and zucchini into thin pieces.",
'Prepare the tempura batter according to the package instructions.',
'Heat oil in a frying pan until hot.',
'Dip the shrimp and vegetables into the batter and fry them in the hot oil until golden brown.',
'Drain on paper towels to remove excess oil.',
'Serve hot with dipping sauce.'
        ]
    },
    teriyaki: {
        name: "Teriyaki Chicken",
        ingredients: [
            "2 chicken breasts", 
            "1/4 cup soy sauce", 
            "1/4 cup honey", 
            "1 tbsp rice vinegar", 
            "1 tbsp sesame oil", 
            "Chopped green onions"
        ],
        preparation: [
           ' In a bowl, combine soy sauce, honey, rice vinegar, and sesame oil to make the marinade.',
'Marinate the chicken breasts in the sauce for at least 30 minutes.',
'Cook the chicken on a grill or in a pan until fully cooked.',
'Serve with chopped green onions on top.'

        ]
    },
    yakitori: {
        name: "Yakitori",
        ingredients: [
            "Chicken thighs, cut into pieces", 
            "2 tbsp soy sauce", 
            "1 tbsp mirin", 
            "1 tbsp sugar", 
            "Green onions"
        ],
        preparation: [
           ' Mix soy sauce, mirin, and sugar to make the marinade sauce.',
            'Skewer the chicken pieces onto wooden or metal skewers.',
            'Grill the skewered chicken until fully cooked, brushing the sauce over the chicken while grilling.',
            'Serve with chopped green onions.'
        ]
    },
    tonkatsu: {
        name: "Tonkatsu",
        ingredients: [
            "Pork loin or pork chops", 
            "1 cup panko breadcrumbs", 
            "2 eggs", 
            "Flour", 
            "Oil for frying", 
            "Tonkatsu sauce"
        ],
        preparation: [
            'Coat the pork with flour, dip it in the egg, and then coat it with panko breadcrumbs.',
'Heat oil in a pan and fry the pork until golden brown and crispy.',
'Drain excess oil on paper towels.',
'Serve with tonkatsu sauce and shredded cabbage.'
        ]
    },
    sashimi: {
        name: "Sashimi",
        ingredients: [
            "Fresh raw fish (salmon, tuna, etc.)", 
            "Wasabi", 
            "Soy sauce", 
            "Pickled ginger"
        ],
        preparation: [
            "Slice the fresh fish into thin pieces.",
            "Serve with wasabi, soy sauce, and pickled ginger on the side."
        ]
    },
    okonomiyaki: {
        name: "Okonomiyaki",
        ingredients: [
            "2 cups flour", 
            "1/2 cup water", 
            "1 egg", 
            "Cabbage", 
            "Bacon", 
            "Okonomiyaki sauce"
        ],
        preparation: [
            'Mix the flour, water, and egg together to form a batter.',
'Stir in chopped cabbage and cooked bacon into the batter.',
'Cook the mixture on a griddle or frying pan until both sides are golden brown.',
'Serve with okonomiyaki sauce.'
        ]
    },
    udon: {
        name: "Udon",
        ingredients: [
            "2 cups udon noodles", 
            "4 cups dashi broth", 
            "Soy sauce", 
            "Chopped green onions", 
            "Tempura (optional)"
        ],
        preparation: [
           ' Cook udon noodles according to the package instructions.',
'In a separate pot, heat the dashi broth and add soy sauce to taste.',
'Add the cooked noodles to the broth and let it simmer for a few minutes.',
'Top with chopped green onions and optional tempura.'
        ]
    },
    misosoup: {
        name: "Miso Soup",
        ingredients: [
            "2 cups dashi broth", 
            "3 tbsp miso paste", 
            "Tofu", 
            "Green onions", 
            "Seaweed"
        ],
        preparation: [
            "Heat the dashi broth and dissolve miso paste in it.",
            "Add diced tofu and simmer for a few minutes.",
            "Add seaweed and chopped green onions before serving."
        ]
    },
    katsudon: {
        name: "Katsudon",
        ingredients: [
            "1 pork cutlet", 
            "1 egg", 
            "1/2 onion", 
            "1 cup dashi broth", 
            "Soy sauce"
        ],
        preparation: [
            "Fry the pork cutlet until golden brown.",
            "In a pan, combine dashi broth, soy sauce, and sliced onions.",
            "Place the fried cutlet in the pan and pour a beaten egg over it.",
            "Cook until the egg is set and serve with rice."
        ]
    },
    donburi: {
        name: "Donburi",
        ingredients: [
            "Rice", 
            "Beef, chicken, or pork", 
            "Onion", 
            "Soy sauce", 
            "Mirin"
        ],
        preparation: [
            "Cook the rice and set it aside.",
            "Cook the meat and onions in a pan with soy sauce and mirin.",
            "Place the cooked meat and onions over the rice and serve."
        ]
    }
};

function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (recipe) {
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('ingredients-list').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('preparation-steps').innerHTML = recipe.preparation.map(step => `<li>${step}</li>`).join('');
        document.getElementById('recipe-details').style.display = 'block';
    }
}
