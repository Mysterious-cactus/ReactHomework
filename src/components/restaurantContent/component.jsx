import { useState } from 'react';
import { restaurants } from '../../../data/mock'
import { Restaurant } from '../restaurant/component';
import { useTheme } from '../themeContext/component';
import classNames from 'classnames';
import styles from "./styles.module.css"

export const RestaurantContent = () => {
    const [activeRestaurantId, setRestaurant] = useState(restaurants[0].id);

    const showRestaurant = (restaurantId) => {
        setRestaurant(restaurantId);
    };

    const { value: themeMode } = useTheme();

    return (
            <>
                <div className={styles.buttonContainer}>
                    {
                        restaurants.map((restaurant_) => 
                            <button className={classNames({[styles.buttonLight]: themeMode === "light",
                                                           [styles.buttonDark]: themeMode === "dark",
                            }, styles.restButton)} onClick={(e) => {
                                showRestaurant(restaurant_.id);}}>{restaurant_.name}</button>
                        )
                    }
                </div>
                <Restaurant restaurantId={activeRestaurantId}/>
                <br/>
                <Restaurant restaurantId={activeRestaurantId}/>
                <br/>
                <Restaurant restaurantId={activeRestaurantId}/>`
            </>
    );
};