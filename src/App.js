import { useState } from "react";

// Styles
import "styles/App.scss";

//Components
import Home from "./views/Home/home";
import Menu from "views/Menu/menu";
import Reservation from "views/Reservation";

function App(props) {
  const [menu, setMenu] = useState(true);
  return (
    <div className="App">
      <Home />
      <Reservation/>
      {menu && <Menu closeMenu={() => setMenu(false)} />}
    </div>
  );
}

export default App;
