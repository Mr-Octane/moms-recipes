# Mom's Recipes 🍳

A beautiful, responsive website to showcase and share your mom's favorite recipes.

## Features

✨ **Beautiful Design** - Clean, elegant interface with warm colors inspired by a home kitchen
📱 **Responsive** - Works perfectly on desktop, tablet, and mobile devices
🔍 **Search Functionality** - Easily search recipes by name or description
📖 **Recipe Details** - Click any recipe to see full ingredients and instructions
🎨 **Easy to Customize** - Simple HTML, CSS, and JavaScript structure

## Getting Started

### Option 1: Open Directly in Browser
Simply download the files and open `index.html` in your web browser.

### Option 2: Deploy Online (Free Options)

#### Using GitHub Pages
1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Set the source branch to `main`
4. Your site will be available at: `https://Mr-Octane.github.io/moms-recipes/`

#### Using Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (you can use your GitHub account)
3. Click "New site from Git"
4. Connect your GitHub account and select this repository
5. Netlify will automatically deploy your site

#### Using Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up (you can use your GitHub account)
3. Click "New Project"
4. Import this repository
5. Vercel will automatically deploy your site

## File Structure

```
moms-recipes/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## How to Add More Recipes

Open `script.js` and find the `recipes` array. Add new recipes following this format:

```javascript
{
    id: 7,
    name: "Recipe Name",
    description: "Brief description",
    emoji: "🍽️",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "4 servings",
    ingredients: [
        "ingredient 1",
        "ingredient 2",
        // Add more ingredients
    ],
    instructions: [
        "Step 1",
        "Step 2",
        // Add more steps
    ]
}
```

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4825c;      /* Main brand color */
    --secondary-color: #f5deb3;    /* Accent color */
    --dark-color: #3e3e3e;         /* Text color */
    --light-color: #f9f7f4;        /* Background color */
    --accent-color: #c17a50;       /* Hover color */
}
```

### Change the Title
Edit the title in `index.html`:
```html
<title>Mom's Recipes - Homemade Cooking</title>
```

### Modify the Description
Update the about section text in `index.html` (around line 50).

## Current Recipes Included

1. 🍪 Chocolate Chip Cookies
2. 🍝 Spaghetti Carbonara
3. 🥧 Apple Pie
4. 🍲 Beef Stew
5. 🍗 Chicken Soup
6. 🍰 Lemon Cake

Feel free to replace these with your mom's actual recipes!

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is free to use and modify for personal use.

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website!

---

Made with ❤️ for sharing delicious homemade recipes!
