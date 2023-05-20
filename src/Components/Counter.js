import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: "increment",amount:1 });
    };
    const decrementHandler = () => {
        dispatch({ type: "decrement",amount:1 });
    };
    const incrementBy2Handler = () => {
        dispatch({ type: "increment",amount:2 });
    };
    const decrementBy5Handler = () => {
        dispatch({ type: "decrement",amount:5 });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementBy2Handler}>Increment By 2</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={decrementBy5Handler}>Decrement By 5</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;