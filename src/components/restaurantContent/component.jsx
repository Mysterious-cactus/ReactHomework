import { useState } from 'react';
import { restaurants } from '../../../data/mock'
import './restaurantContent.css'
import { Dish } from '../dish/component';

export const RestaurantContent = () => {
    const [restaurantId, getRestaurant] = useState(restaurants[0].id);

    const showRestaurant = (restaurantId) => {
        getRestaurant(restaurantId);
    };

    return (
        <>
            <div className='button-container'>
                {
                    restaurants.map((r) => 
                        <button onClick={(e) => {
                            showRestaurant(r.id);}}>{r.name}</button>
                    )
                }
            </div>
           { restaurants.map((restaurant) => 
                restaurant.id == restaurantId 
                    ? (<div className='restaurant-container'>
                        <h2>{restaurant.name}</h2>
                        <h3>Menu:</h3>
                        <ul>
                            {restaurant.menu.map((dish) => 
                                <Dish id={dish.id} name={dish.name} price={dish.price} ingredients={dish.ingredients} />
                            )}
                        </ul>
                        <h3>Reviews:</h3>
                        <ul>
                            {restaurant.reviews && restaurant.reviews.length 
                                ? restaurant.reviews.map((review) => 
                                    <li>
                                        <h4>{review.user}, {review.rating}★</h4>
                                        <p>{review.text}</p>
                                    </li>
                                )
                                : <h4>No reviews</h4>
                            }
                        </ul>
                     </div>)
                    : <></>
           
            )}
        </>
    );
};