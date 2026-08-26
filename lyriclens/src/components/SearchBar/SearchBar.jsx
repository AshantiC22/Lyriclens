import { useState } from "react";

function SearchBar({ onSearch, isLoading }) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = () => {
    onSearch(song, artist);
    setSong("");
    setArtist("");
  };

  return (
    <div>
      <input
        value={song}
        onChange={(e) => setSong(e.target.value)}
        placeholder="Enter song name..."
      />
      <input
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name..."
      />
      <button onClick={handleSubmit} disabled={isLoading}>Search</button>
    </div>
  );
}
export default SearchBar;
