import { restaurants } from "../../../data/mock"
import { Dish } from "../dish/component";

export const Restaurant = ({restaurantId}) => {
    let restaurant = restaurants.find(restaurant_ => restaurant_.id == restaurantId);
    return (
        <div className='restaurant-container'>
            <h2>{restaurant.name}</h2>
            <h3>Menu:</h3>            
            <ul>
                {restaurant.menu.map((dish) => 
                    <Dish key={dish.id} id={dish.id} name={dish.name} price={dish.price} ingredients={dish.ingredients} />
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
        </div>
    );
}