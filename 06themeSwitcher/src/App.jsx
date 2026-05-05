import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    let themeChange = document.querySelector("html");
    //remove the current light or dark theme from DOM
    themeChange.classList.remove("light", "dark");

    //Add the themeMode to the DOM
    themeChange.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="p-4 bg-pink-600 text-3xl text-center">
        Rajasthan Royals (RR)
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
