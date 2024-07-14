import { useTheme } from "../themeContext/component";

export const ToggleThemeButton = () => {
    const { toggleTheme } = useTheme();
  
    return <button onClick={toggleTheme}>toggleTheme</button>;
  };