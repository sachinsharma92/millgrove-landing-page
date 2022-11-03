import { useState } from "react";

// Styles
import "styles/App.scss";

//Components
import Home from "./views/Home/home";
import Menu from "views/Menu/menu";
import Firstfold from "views/FirstFold/firstfold";
import Secondfold from "views/SecondFold/secondfold";
import CookiesPopup from "components/CookiesPopup/cookiesPopup";

function App(props) {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(true);
  const [cookiesPopup, setCookiesPopup] = useState(true);

  useState(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return (
    <div className="millgrove">
      {cookiesPopup && (
        <CookiesPopup closeCookiesPopup={() => setCookiesPopup(false)} />
      )}
      {loader && <Home />}
      <Firstfold openMenu={() => setMenu(true)} />
      <Secondfold />
      {menu && <Menu closeMenu={() => setMenu(false)} />}
    </div>
  );
}

export default App;
