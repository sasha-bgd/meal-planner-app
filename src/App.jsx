import RecipeCard from './components/RecipeCard';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1>My Recipes</h1>
      
      <RecipeCard 
        name="Chicken Soup"
        servings={6}
      />
      
      <RecipeCard 
        name="Pasta Carbonara"
        servings={4}
        imageUrl="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300"
      />
    </div>
  );
}

export default App;