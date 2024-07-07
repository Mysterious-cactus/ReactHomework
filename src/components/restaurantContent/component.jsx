import { useState } from 'react';
import { restaurants } from '../../../data/mock'
import './restaurantContent.css'
import { Restaurant } from '../restaurant/component';

export const RestaurantContent = () => {
    const [activeRestaurantId, setRestaurant] = useState(restaurants[0].id);

    const showRestaurant = (restaurantId) => {
        setRestaurant(restaurantId);
    };

    return (
        <>
            <div className='button-container'>
                {
                    restaurants.map((restaurant_) => 
                        <button onClick={(e) => {
                            showRestaurant(restaurant_.id);}}>{restaurant_.name}</button>
                    )
                }
            </div>
            <Restaurant restaurantId={activeRestaurantId}/>
            <br/>
            <Restaurant restaurantId={activeRestaurantId}/>
            <br/>
            <Restaurant restaurantId={activeRestaurantId}/>
        </>
    );
};