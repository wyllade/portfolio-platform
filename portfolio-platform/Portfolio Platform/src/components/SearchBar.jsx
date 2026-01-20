// WHY: Defines a reusable component responsible for handling
// user input used to search and filter projects.
// WHAT HAPPENS IF REMOVED: Users will not be able to search
// or filter the project list.
function SearchBar({ setSearchTerm }) {
  return (
    // WHY: Input field allows users to type a search query.
    // WHAT HAPPENS IF REMOVED: There is no way for users to
    // enter search text.
    <input
      type="text" 
      /* WHY: Specifies that the input accepts text.
         WHAT HAPPENS IF REMOVED: The browser may not handle
         input as expected. */

      placeholder="Search projects..."
      /* WHY: Provides guidance on what the input is for.
         WHAT HAPPENS IF REMOVED: Users may be confused
         about the input’s purpose. */

      onChange={(e) => setSearchTerm(e.target.value)}
      /* WHY: Captures user input and updates the searchTerm
         state in the parent component.
         WHAT HAPPENS IF REMOVED:
         - Typing has no effect
         - Project filtering stops working */
    />
  );
}

// WHY: Exports the component so it can be imported and used
// in App.jsx.
// WHAT HAPPENS IF REMOVED: Importing this component will fail,
// causing a runtime error.
export default SearchBar;