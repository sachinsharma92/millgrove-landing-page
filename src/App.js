import { useState } from "react";

// Styles
import "styles/App.scss";

//Components
import Home from "./views/Home/home";
import Menu from "views/Menu/menu";

function App(props) {
  const [menu, setMenu] = useState(true);
  return (
    <div className="App">
      <Home />
      {menu && <Menu closeMenu={() => setMenu(false)} />}
    </div>
  );
}

export default App;
