import { useEffect, useState } from "react";

import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setthemeMode] = useState("light");
  
  const darkTheme = () => {
    setthemeMode("dark");
  };

  const lightTheme = () => {
    setthemeMode("light");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
      <h1 className="text-3xl bg-pink-500 p-4">Chai</h1>
    </ThemeProvider>
  );
}

export default App;
