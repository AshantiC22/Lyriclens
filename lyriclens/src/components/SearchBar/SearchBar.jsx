function SearchBar({ onSearch }) {
  return (
    <div>
      <input placeholder="Enter song name..." />
      <input placeholder="Enter artist name..." />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
export default SearchBar;
