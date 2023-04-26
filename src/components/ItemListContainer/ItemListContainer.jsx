import "./ItemListContainer.css";

export const ItemListContainer = ({ item1, item2, item3 }) => {
  return (
    <div className="list__container">
      <h2>Productos</h2>
      <hr />
      <p>{item1}</p>
      <p>{item2}</p>
      <p>{item3}</p>
    </div>
  );
};
