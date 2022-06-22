import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onItemDelete}) {
  

  const listingsToDisplay = listings.map(listing => <ListingCard key={listing.description} onItemDelete={onItemDelete} listing={listing}/>);

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
