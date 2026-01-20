// WHY: Defines a reusable React functional component for the
// application header.
// WHAT HAPPENS IF REMOVED: The application will still run,
// but it will lose its title and branding, making the UI
// look incomplete and unprofessional.

function Header() {
  return (
    // WHY: The <header> semantic HTML element represents
    // introductory content such as titles or navigation.
    // WHAT HAPPENS IF REMOVED: The title loses semantic meaning,
    // which can negatively affect accessibility and SEO.
    <header>

      {/* WHY: Displays the main title of the application.
          WHAT HAPPENS IF REMOVED: Users will not know the purpose
          of the website, reducing clarity and usability. */}
      <h1>Portfolio Platform</h1>

    </header>
  );
}

// WHY: Makes the Header component available for use in other
// files (such as App.jsx).
// WHAT HAPPENS IF REMOVED: The Header component cannot be imported,
// causing errors where it is used.
export default Header;