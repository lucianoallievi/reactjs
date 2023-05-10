import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items, categoryId }) => {
  return (
    <div>
      <h2>Productos</h2>
      {categoryId ? (
        <div>
          <h3>Categoría {categoryId}:</h3>
        </div>
      ) : (
        <div></div>
      )}
      <hr />

      <div className="row">
        {items.map((prod) => (
          <ItemCard item={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
