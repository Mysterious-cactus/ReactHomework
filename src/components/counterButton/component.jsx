import { useTheme } from '../themeContext/component';
import classNames from 'classnames';
import styles from "./styles.module.css"

export const CounterButton = ({children, onClickFunc}) => {
    const { value: themeMode } = useTheme();
    return (
        <button className={classNames({[styles.buttonLight]: themeMode === "light",
            [styles.buttonDark]: themeMode === "dark",}, styles.counterButton)} 
            onClick={onClickFunc}>{children}</button>
    );
};