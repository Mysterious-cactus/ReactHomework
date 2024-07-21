import { ToggleThemeButton } from "../toggleThemeButton/component";
import { useUser } from "../userContext/component";
import classNames from 'classnames'
import styles from "./styles.module.css"

export const UserHeader = () => {
    const { value: username, changeUser } = useUser();
    return (
        <div className={classNames(styles.userContainer)}>
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
    );
};