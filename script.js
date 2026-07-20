// Sample recipes - You can add more recipes here
const recipes = [
    {
        id: 1,
        name: "Chocolate Chip Cookies",
        description: "Classic homemade chocolate chip cookies with a perfect chewy texture.",
        emoji: "🍪",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: "24 cookies",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a small bowl, combine flour, baking soda, and salt.",
            "In a large bowl, beat butter and both sugars until creamy.",
            "Add eggs and vanilla to butter mixture and beat well.",
            "Gradually stir in flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto baking sheets.",
            "Bake for 9-12 minutes or until golden brown.",
            "Cool on baking sheets for 2 minutes, then transfer to wire racks."
        ]
    },
    {
        id: 2,
        name: "Spaghetti Carbonara",
        description: "Authentic Italian pasta with creamy egg sauce and bacon.",
        emoji: "🍝",
        prepTime: "10 mins",
        cookTime: "20 mins",
        servings: "4 servings",
        ingredients: [
            "1 lb spaghetti",
            "6 oz bacon or pancetta, diced",
            "4 large eggs",
            "1 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook spaghetti according to package directions in salted boiling water.",
            "Meanwhile, cook bacon until crispy.",
            "In a bowl, whisk together eggs, Parmesan, and pepper.",
            "Drain pasta, reserving 1 cup pasta water.",
            "Add hot pasta to bacon and remove from heat.",
            "Quickly stir in egg mixture until creamy, adding pasta water as needed.",
            "Serve immediately with extra Parmesan and black pepper."
        ]
    },
    {
        id: 3,
        name: "Apple Pie",
        description: "Warm, comforting apple pie with a flaky crust.",
        emoji: "🥧",
        prepTime: "30 mins",
        cookTime: "50 mins",
        servings: "8 servings",
        ingredients: [
            "2 pie crusts",
            "6 medium apples, sliced",
            "3/4 cup sugar",
            "1/4 cup brown sugar",
            "2 tbsp flour",
            "1 tsp cinnamon",
            "1/4 tsp nutmeg",
            "2 tbsp butter",
            "1 tbsp lemon juice"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Place one pie crust in a 9-inch pie dish.",
            "Mix apples with sugars, flour, and spices.",
            "Pour apple mixture into crust.",
            "Dot with butter and drizzle with lemon juice.",
            "Cover with second crust and seal edges.",
            "Cut slits in top for steam to escape.",
            "Bake for 50-60 minutes until golden brown.",
            "Cool before serving. Serve with ice cream!"
        ]
    },
    {
        id: 4,
        name: "Beef Stew",
        description: "Hearty beef stew with vegetables and rich broth.",
        emoji: "🍲",
        prepTime: "20 mins",
        cookTime: "120 mins",
        servings: "6 servings",
        ingredients: [
            "2 lbs beef chuck, cubed",
            "3 tbsp flour",
            "4 tbsp oil",
            "1 large onion, chopped",
            "4 cloves garlic, minced",
            "4 cups beef broth",
            "4 carrots, sliced",
            "4 potatoes, cubed",
            "2 tsp thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Dredge beef in flour, salt, and pepper.",
            "Heat oil in large pot and brown beef in batches.",
            "Remove beef and sauté onion and garlic.",
            "Return beef to pot and add broth and thyme.",
            "Bring to boil, then reduce heat and simmer for 1 hour.",
            "Add carrots and potatoes, simmer 30-40 minutes more.",
            "Season to taste and serve hot."
        ]
    },
    {
        id: 5,
        name: "Chicken Soup",
        description: "Comforting homemade chicken soup, perfect for any day.",
        emoji: "🍗",
        prepTime: "15 mins",
        cookTime: "45 mins",
        servings: "6 servings",
        ingredients: [
            "1 whole chicken (4-5 lbs)",
            "8 cups water",
            "3 carrots, sliced",
            "3 celery stalks, chopped",
            "1 large onion, quartered",
            "4 cloves garlic",
            "2 tsp thyme",
            "1 bay leaf",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Bring water to boil in large pot.",
            "Add chicken, carrots, celery, onion, and garlic.",
            "Reduce heat and simmer for 45 minutes.",
            "Remove chicken and shred meat.",
            "Strain broth and return to pot with vegetables.",
            "Add shredded chicken back to pot.",
            "Season with salt, pepper, and fresh thyme.",
            "Simmer 5 more minutes and serve hot."
        ]
    },
    {
        id: 6,
        name: "Lemon Cake",
        description: "Light and zesty lemon cake with lemon glaze.",
        emoji: "🍰",
        prepTime: "20 mins",
        cookTime: "35 mins",
        servings: "8 servings",
        ingredients: [
            "2 cups all-purpose flour",
            "1 1/2 tsp baking powder",
            "1/2 tsp salt",
            "1/2 cup butter, softened",
            "1 cup sugar",
            "3 large eggs",
            "1/2 cup sour cream",
            "3 tbsp lemon juice",
            "2 tbsp lemon zest"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Mix flour, baking powder, and salt.",
            "Cream butter and sugar until fluffy.",
            "Add eggs one at a time, beating well.",
            "Alternate adding flour mixture and sour cream.",
            "Stir in lemon juice and zest.",
            "Pour into greased 9-inch cake pan.",
            "Bake for 35-40 minutes until golden.",
            "Cool and glaze if desired."
        ]
    }
];

// Load recipes when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayRecipes(recipes);
    setupEventListeners();
});

// Display recipes in the grid
function displayRecipes(recipesToDisplay) {
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = '';

    if (recipesToDisplay.length === 0) {
        recipeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No recipes found. Try a different search!</p>';
        return;
    }

    recipesToDisplay.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeGrid.appendChild(recipeCard);
    });
}

// Create a recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
        <div class="recipe-image">${recipe.emoji}</div>
        <div class="recipe-info">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.prepTime}</span>
                <span>🔥 ${recipe.cookTime}</span>
                <span>🍽️ ${recipe.servings}</span>
            </div>
            <a href="#" class="read-more">View Recipe →</a>
        </div>
    `;

    card.addEventListener('click', function(e) {
        e.preventDefault();
        showRecipeModal(recipe);
    });

    return card;
}

// Show recipe details in a modal
function showRecipeModal(recipe) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';

    let ingredientsList = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    let instructionsList = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div style="text-align: center; font-size: 3rem; margin-bottom: 1rem;">${recipe.emoji}</div>
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${recipe.name}</h2>
            <div class="recipe-meta" style="justify-content: center; margin-bottom: 1.5rem;">
                <span>⏱️ ${recipe.prepTime}</span>
                <span>🔥 ${recipe.cookTime}</span>
                <span>🍽️ ${recipe.servings}</span>
            </div>
            
            <h3 style="color: var(--primary-color); margin-top: 1.5rem;">Ingredients:</h3>
            <ul style="margin-left: 1.5rem; line-height: 1.8;">
                ${ingredientsList}
            </ul>
            
            <h3 style="color: var(--primary-color); margin-top: 1.5rem;">Instructions:</h3>
            <ol style="margin-left: 1.5rem; line-height: 1.8;">
                ${instructionsList}
            </ol>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        modal.remove();
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
