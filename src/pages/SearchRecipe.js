import { useState } from "react";
import "../styles.css";
import Card from "../components/Card";

export default function SearchRecipe() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const getRecipies = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm
          .toLowerCase()
          .replace(/\s+/g, "_")}`
      );
      const data = await response.json();
      setData(data.meals);
      // console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Food Recipie App</h1>
      <div className="searchBar">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Enter an ingredient"
        />
        <button onClick={getRecipies}>Search</button>
      </div>

      <div className="recipies">
        {data && data.length > 0 ? (
          data.map((recipe, i) => <Card key={i} data={recipe} />)
        ) : (
          <h3>No recipes found...</h3>
        )}
      </div>
    </div>
  );
}
