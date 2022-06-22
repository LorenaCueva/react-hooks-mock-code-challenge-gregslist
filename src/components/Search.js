import React, {useState} from "react";

function Search({onSearch}) {
  
  const [searchWord, setSearchWord] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchWord);
    setSearchWord("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
