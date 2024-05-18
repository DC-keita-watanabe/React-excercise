import React,{useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
    const [theme, toggleTheme] = useContext(ThemeContext);

    const styles = {
        color: theme === 'light' ? 'red' : 'blue',
    };

    return(
        <button style={styles} onClick={toggleTheme}>ヤッホー</button>
    )
}

export default ThemeButton