import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  return (
    <div className="list__container">
      <h2>LOPEZ S.A.</h2>
      <hr />
      <p>{saludo}</p>
    </div>
  );
};
