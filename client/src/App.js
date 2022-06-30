import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Backdrop, Navbar, SideDrawer } from "./components";
import { Pages } from "./pages";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const toggleClick = () => {
    setSideToggle(!sideToggle);
  };

  return (
    <Router>
      <Navbar toggleClick={toggleClick} />
      <Backdrop toggleClick={toggleClick} show={sideToggle} />
      <SideDrawer toggleClick={toggleClick} show={sideToggle} />
      <main>
        <Pages />
      </main>
      {/* Navbar */}
      {/* Sidedrawer */}
      {/* backdrop */}
      {/* Homescreen */}
      {/* productscreen */}
      {/* CartScreen */}
    </Router>
  );
};

export default App;
