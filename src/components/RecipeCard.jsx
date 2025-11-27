import '../styles/RecipeCard.css';

function RecipeCard({ name, servings, imageUrl, onClick }) {
    return (
    <div className="recipe-card" onClick={onClick}>
        <img 
        src={imageUrl || '/images/recipe-placeholder.jpg'}
        alt={name}
        />
        <div className="recipe-info">
            <h3>{name}</h3>
            <p>Servings: {servings}</p>
        </div>
    </div>
    );
}

export default RecipeCard;