// Defines a reusable component responsible for handling

function SearchBar({ setSearchTerm }) {
  return (
    //There is no way for users to enter search text.
    <input
      type="text"
      placeholder="Search projects..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;