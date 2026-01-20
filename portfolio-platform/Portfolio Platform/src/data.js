// initialProjects is exported so it can be imported and used in App.jsx.
// If "export" is removed, App.jsx will fail with an import error.
export const initialProjects = [
  {
    // id uniquely identifies each project.
    // Used by React (especially when rendering lists with keys).
    // If removed, React may show warnings and list updates can behave incorrectly.
    id: 1,

    // title is the project name.
    // Used for display AND for search filtering.
    // If removed, the search filter will crash when calling project.title.
    title: "Portfolio Website",

    // description provides additional project details.
    // Used for UI display.
    // If removed, only visual information is lost (unless referenced elsewhere).
    description: "A React-based portfolio",

    // category groups or classifies the project.
    // Often used for filtering, tags, or styling.
    // If removed, categorization features will not work.
    category: "Web Development",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Online shopping platform",
    category: "Application",
  },
];
