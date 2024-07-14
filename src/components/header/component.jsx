import { ToggleThemeButton } from "../toggleThemeButton/component";
import classNames from "classnames";
import styles from "./styles.module.css"
import { useUser } from "../userContext/component";

export const Header = () => {
    const { value: username, changeUser } = useUser();
    return (
        <div className={classNames(styles.headerContainer)}>
            <h1>Restaurants</h1>
            <div style={{display: "inline-flex", justifyContent: "space-between", alignItems: "center"}}>
                {username === null 
                    ?
                        <button onClick={changeUser}>Log In</button>
                    :
                    <>
                        <h2 style={{marginRight: "10px"}}>Hello, {username}!</h2>
                        <button onClick={changeUser}>Log Out</button>
                    </>
                    
                }
                <ToggleThemeButton />   
            </div>                               
        </div>       
    );
};