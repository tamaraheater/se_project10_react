import "./ItemCard.css";

function ItemCard({ item }) {
  /*Props needs further study*/
  return (
    <li className="item-card">
      <h2 className="item-card__name">{item.name}</h2>
      <img className="item-card__image" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
