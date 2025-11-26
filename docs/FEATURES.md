# Meal Planner App - Features List

## Project Overview
A web application for storing recipes and generating shopping lists from planned weekly meals. Built with React, Node.js/Express, and SQLite.

---

## MVP Features

#### Recipe Management (CRUD Operations)
- [ ] **Create Recipe**
  - Form with: name, ingredients (quantity/unit/name), cooking steps, servings
  - Optional: photo upload, prep time, cook time
  - Form validation (required fields)
  
- [ ] **Read Recipes**
  - Display all recipes in grid/list view on main page
  - Individual recipe detail page
  - Show recipe with all ingredients and instructions
  
- [ ] **Update Recipe**
  - Edit existing recipe form
  - Pre-populate form with current recipe data
  
- [ ] **Delete Recipe**
  - Delete button with confirmation dialog
  - Remove recipe and associated data

#### Meal Planning & Selection
- [ ] Click recipes to select/deselect for the week
- [ ] Visual indicator (e.g., border, checkmark) for selected recipes
- [ ] Display count of selected recipes
- [ ] "Clear all selections" button

#### Shopping List Generation
- [ ] Generate list button
- [ ] Combine ingredients from all selected recipes
- [ ] Aggregate duplicate ingredients (e.g., "2 cups milk" + "1 cup milk" = "3 cups milk")
- [ ] Display ingredients with quantities and units
- [ ] Checkbox to mark items as purchased
- [ ] "Clear list" functionality

#### Portion Scaling
- [ ] Input field to adjust servings per recipe
- [ ] Calculate scaled ingredient quantities
- [ ] Display scaled amounts in recipe view
- [ ] Update shopping list with scaled quantities

---

## Nice-to-Have Features

### Priority 1 - High Impact
- [ ] **Smart Shopping List Categories**
  - Group items: Produce, Dairy, Meat, Pantry, Frozen, Other
  - Drag and drop to reorder or recategorize
  
- [ ] **Search & Filter**
  - Search recipes by name
  - Filter by ingredients
  - Filter by tags (when implemented)
  
- [ ] **UX Improvements**
  - Empty states ("No recipes yet! Add your first recipe")
  - Loading spinners during API calls
  - Error messages for failed operations

### Priority 2 - Polish
- [ ] **Recipe Tags/Categories**
  - Add tags: breakfast, lunch, dinner, vegetarian, quick, etc.
  - Filter recipes by tag
  
- [ ] **Dark Mode**
  - Toggle between light and dark themes
  - Save preference in localStorage
  
- [ ] **Data Export/Import**
  - Export all recipes as JSON
  - Import recipes from JSON file
  - Backup and restore functionality

### Priority 3 - Advanced
- [ ] **Nutritional Information**
  - Display calories, protein, carbs, fat per serving
  - Calculate totals for shopping list
  
- [ ] **Recipe Ratings**
  - 5-star rating system
  - Personal notes/modifications
  
- [ ] **Meal Calendar**
  - Assign recipes to specific days of the week
  - Visual calendar view

