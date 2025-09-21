// Recipe data (real examples)
const recipes = [
    {
        title: "Avocado Salad",
        category: "salad",
        image: "images/av.jpg", 
        shortDesc: "A refreshing mix of avocado, tomatoes, and cucumber.",
        ingredients: ["2 avocados", "1 cucumber", "1 tomato", "1 tbsp olive oil", "Salt & pepper"],
        steps: [
            "Chop all vegetables into bite-sized pieces.",
            "Mix in a bowl with olive oil, salt, and pepper.",
            "Serve chilled."
        ],
        nutrition: { calories: 250, protein: "4g", carbs: "18g", fat: "20g" }
    },
    {
        title: "Grilled Chicken Breast",
        category: "chicken",
        image: "images/cb.jpg", 
        shortDesc: "Lean protein-packed grilled chicken.",
        ingredients: ["200g chicken breast", "1 tsp olive oil", "1 tsp paprika", "Salt & pepper"],
        steps: [
            "Marinate chicken with olive oil, paprika, salt, and pepper.",
            "Grill on medium heat for 5-6 minutes each side.",
            "Serve hot with veggies."
        ],
        nutrition: { calories: 300, protein: "35g", carbs: "0g", fat: "16g" }
    },
    {
        title: "Banana Smoothie",
        category: "smoothie",
        image: "images/b.jpg", 
        shortDesc: "Creamy smoothie with bananas and milk.",
        ingredients: ["2 bananas", "200ml milk", "1 tbsp honey"],
        steps: [
            "Peel bananas and slice them.",
            "Blend with milk and honey until smooth.",
            "Serve chilled."
        ],
        nutrition: { calories: 180, protein: "6g", carbs: "38g", fat: "2g" }
    },
    {
        title: "Quinoa & Veggie Bowl",
        category: "bowl",
        image: "images/q.jpg", 
        shortDesc: "A wholesome mix of quinoa and fresh veggies.",
        ingredients: ["1 cup cooked quinoa", "1 carrot", "1 bell pepper", "½ cup broccoli", "Soy sauce"],
        steps: [
            "Cook quinoa as per instructions.",
            "Stir-fry veggies until tender.",
            "Mix quinoa with veggies and soy sauce."
        ],
        nutrition: { calories: 320, protein: "12g", carbs: "55g", fat: "6g" }
    },
    {
        title: "Oatmeal with Berries",
        category: "breakfast",
        image: "images/o.jpg", 
        shortDesc: "Heart-healthy oats topped with fresh berries.",
        ingredients: ["1 cup oats", "1 cup milk", "½ cup mixed berries", "1 tsp honey"],
        steps: [
            "Cook oats with milk until creamy.",
            "Top with berries and honey.",
            "Serve warm."
        ],
        nutrition: { calories: 220, protein: "7g", carbs: "40g", fat: "4g" }
    }
];

// DOM elements
const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

// Modal elements
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalNutrition = document.getElementById("modalNutrition");
const closeBtn = document.querySelector(".close");

// Render recipes
function renderRecipes(list) {
    recipesContainer.innerHTML = "";
    list.forEach((recipe, index) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p style="padding: 0 15px 15px;">${recipe.shortDesc}</p>
        `;
        card.addEventListener("click", () => openModal(recipe));
        recipesContainer.appendChild(card);
    });
}

// Open modal
function openModal(recipe) {
    modal.style.display = "block";
    modalTitle.textContent = recipe.title;
    modalImage.src = recipe.image;
    
    // Ingredients
    modalIngredients.innerHTML = "";
    recipe.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        modalIngredients.appendChild(li);
    });

    // Steps
    modalSteps.innerHTML = "";
    recipe.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        modalSteps.appendChild(li);
    });

    // Nutrition
    modalNutrition.innerHTML = `
        <tr><th>Calories</th><th>Protein</th><th>Carbs</th><th>Fat</th></tr>
        <tr>
            <td>${recipe.nutrition.calories}</td>
            <td>${recipe.nutrition.protein}</td>
            <td>${recipe.nutrition.carbs}</td>
            <td>${recipe.nutrition.fat}</td>
        </tr>
    `;
}

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Search & filter
function filterRecipes() {
    const searchVal = searchInput.value.toLowerCase();
    const categoryVal = filterCategory.value;
    const filtered = recipes.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchVal);
        const matchesCategory = categoryVal === "all" || r.category === categoryVal;
        return matchesSearch && matchesCategory;
    });
    renderRecipes(filtered);
}

searchInput.addEventListener("input", filterRecipes);
filterCategory.addEventListener("change", filterRecipes);

// Initial render
renderRecipes(recipes);
