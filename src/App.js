import AppRouter from "AppRouter";
import { useEffect } from "react";

// Styles
import "styles/App.scss";

//Components
function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;