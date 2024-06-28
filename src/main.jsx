import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from '../data/mock'
import '../style/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Restaurants:</h1>
    <div className='restaurant-container'>
      <h2>{restaurants[0].name}</h2>
      <h3>Menu:</h3>
      <ul>
        <li>
          <h4>{restaurants[0].menu[0].name}, {restaurants[0].menu[0].price}$</h4>         
          <label>({restaurants[0].menu[0].ingredients[0]}, {restaurants[0].menu[0].ingredients[1]})</label>
        </li>
        <li>
          <h4>{restaurants[0].menu[1].name}, {restaurants[0].menu[1].price}$</h4>         
          <label>({restaurants[0].menu[1].ingredients[0]})</label>
        </li>
        <li>
          <h4>{restaurants[0].menu[2].name}, {restaurants[0].menu[2].price}$</h4>        
          <label>({restaurants[0].menu[2].ingredients[0]}, {restaurants[0].menu[2].ingredients[1]})</label>
        </li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>
          <h4>{restaurants[0].reviews[0].user}, {restaurants[0].reviews[0].rating}★</h4>
          <p>{restaurants[0].reviews[0].text}</p>
        </li>
        <li>
          <h4>{restaurants[0].reviews[1].user}, {restaurants[0].reviews[1].rating}★</h4>
          <p>{restaurants[0].reviews[1].text}</p>
        </li>
      </ul>
    </div>
    <br />
    <div className='restaurant-container'>
      <h2>{restaurants[1].name}</h2>
      <h3>Menu:</h3>
      <ul>
        <li>
          <h4>{restaurants[1].menu[0].name}, {restaurants[1].menu[0].price}$</h4>         
          <label>({restaurants[1].menu[0].ingredients[0]}, {restaurants[1].menu[0].ingredients[1]}, {restaurants[1].menu[0].ingredients[2]})</label>
        </li>
        <li>
          <h4>{restaurants[1].menu[1].name}, {restaurants[1].menu[1].price}$</h4>         
          <label>({restaurants[1].menu[1].ingredients[0]}, {restaurants[1].menu[1].ingredients[1]}, {restaurants[1].menu[1].ingredients[2]}, {restaurants[1].menu[1].ingredients[3]})</label>
        </li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>
          <h4>{restaurants[1].reviews[0].user}, {restaurants[1].reviews[0].rating}★</h4>
          <p>{restaurants[1].reviews[0].text}</p>
        </li>
        <li>
          <h4>{restaurants[1].reviews[1].user}, {restaurants[1].reviews[1].rating}★</h4>
          <p>{restaurants[1].reviews[1].text}</p>
        </li>
        <li>
          <h4>{restaurants[1].reviews[2].user}, {restaurants[1].reviews[2].rating}★</h4>
          <p>{restaurants[1].reviews[2].text}</p>
        </li>
      </ul>
    </div>
    <br />
    <div className='restaurant-container'>
      <h2>{restaurants[2].name}</h2>
      <h3>Menu:</h3>
      <ul>
        <li>
          <h4>{restaurants[2].menu[0].name}, {restaurants[2].menu[0].price}$</h4>         
          <label>({restaurants[2].menu[0].ingredients[0]})</label>
        </li>
        <li>
          <h4>{restaurants[2].menu[1].name}, {restaurants[2].menu[1].price}$</h4>         
          <label>({restaurants[2].menu[1].ingredients[0]}, {restaurants[2].menu[1].ingredients[1]})</label>
        </li>
        <li>
          <h4>{restaurants[2].menu[2].name}, {restaurants[2].menu[2].price}$</h4>         
          <label>({restaurants[2].menu[2].ingredients[0]})</label>
        </li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>
          <h4>{restaurants[2].reviews[0].user}, {restaurants[2].reviews[0].rating}★</h4>
          <p>{restaurants[2].reviews[0].text}</p>
        </li>
      </ul>
    </div>
    <br />
    <div className='restaurant-container'>
      <h2>{restaurants[3].name}</h2>
      <h3>Menu:</h3>
      <ul>
        <li>
          <h4>{restaurants[3].menu[0].name}, {restaurants[3].menu[0].price}$</h4>         
          <label>({restaurants[3].menu[0].ingredients[0]})</label>
        </li>
        <li>
          <h4>{restaurants[3].menu[1].name}, {restaurants[3].menu[1].price}$</h4>         
          <label>({restaurants[3].menu[1].ingredients[0]}, {restaurants[3].menu[1].ingredients[1]})</label>
        </li>
      </ul>
      <h3>Reviews:</h3>
      <ul>
        <li>
          <h4>{restaurants[3].reviews[0].user}, {restaurants[3].reviews[0].rating}★</h4>
          <p>{restaurants[3].reviews[0].text}</p>
        </li>
        <li>
          <h4>{restaurants[3].reviews[1].user}, {restaurants[3].reviews[1].rating}★</h4>
          <p>{restaurants[3].reviews[1].text}</p>
        </li>
      </ul>
    </div>
  </div>
)
