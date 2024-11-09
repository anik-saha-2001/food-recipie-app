import "../styles.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <img src={data.strMealThumb} alt={data.strMeal} />
      <h3>{data.strMeal}</h3>
    </div>
  );
}
