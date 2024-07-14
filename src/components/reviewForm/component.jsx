import { useReducer } from "react";
import { Counter } from "../counter/component";
import { useCount } from "../../hooks/useCount";

const FORM_INIT = {
    username: "",
    review: "",
};

const useReviewForm = (initialValue) => {
    return useReducer(reducer, initialValue);
};

function reducer(state, {type, payload}) {
    switch(type) {
        case "setUsername":
            return { ...state, username: payload };
        case "setReview":
            return { ...state, review: payload };
        case "clear":
            return FORM_INIT;
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [form, dispatch] = useReviewForm(FORM_INIT);
    const {username, review} = form;
    
    const { count, decrement, increment } = useCount({minValue: 1, maxValue: 5});

    return (
        <div>
            <label>Username</label>
            <input type="text" value={username} onChange={(event) => {dispatch({ type: "setUsername", payload: event.target.value })}} />
            <br/>
            <label>Review</label>
            <input type="text" value={review} onChange={(event) => {dispatch({ type: "setReview", payload: event.target.value })}} />
            <br/>
            <label>Rating</label>
            <Counter count={count} increment={increment} decrement={decrement}/>
            <br/>
            <button onClick={() => {dispatch({ type: "clear" })}}>Save</button>
        </div>
    );
};