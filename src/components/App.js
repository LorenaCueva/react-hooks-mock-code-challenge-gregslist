import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [listings, setListings] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
    .catch(error => console.alert(error));
  },[])

  function handleItemDelete(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(()=> {
      const listingsToDisplay = listings.filter(listing => listing.id !== id);
      setListings(listingsToDisplay);
    })
    .catch(error => console.alert(error));

  }

  function handleSearch(searchWord){
      setSearchWord(searchWord);
  }

  function handleOnSort(){
    setSort((sort) => !sort)
  }

  let listingsToDisplay = listings.filter(listing => listing.description.toLowerCase().includes(searchWord.toLocaleLowerCase()));

  listingsToDisplay = sort ? listingsToDisplay.sort((a, b) => a.location.localeCompare(b.location)) : listingsToDisplay;

  return (
    <div className="app">
      <Header onSearch={handleSearch} onSort={handleOnSort}/>
      <ListingsContainer listings={listingsToDisplay} onItemDelete={handleItemDelete}/>
    </div>
  );
}

export default App;
