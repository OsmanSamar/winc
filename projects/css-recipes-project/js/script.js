// Example API request (replace with your actual API endpoint)
const apiKey = "YOUR_API_KEY";
const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`;

// Fetch recipes
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes; // Array of recipe objects

    // Display recipes on the screen
    const main = document.querySelector("main");
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>${recipe.summary}</p>
            `;
      main.appendChild(recipeCard);
    });
  })
  .catch((error) => console.error("Error fetching recipes:", error));
