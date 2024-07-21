import classNames from "classnames";
import styles from "./styles.module.css"
import { UserHeader } from "../user/component";

export const Header = () => {
    return (
        <div className={classNames(styles.headerContainer)}>
            <h1>Restaurants</h1>
            <UserHeader />                              
        </div>       
    );
};