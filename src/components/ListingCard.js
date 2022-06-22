import React, {useState} from "react";

function ListingCard({listing, onItemDelete}) {
  const {description, image, location, id} = listing;
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteClick(){
    setFavorite((favorite)=> !favorite);
  }

  function handleDeleteClick(){
      onItemDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
