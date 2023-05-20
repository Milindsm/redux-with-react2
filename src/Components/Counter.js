import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from "../Store"
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const showCounter = useSelector((state) => state.counter.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment(1));
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement(1));
    };
    const incrementBy2Handler = () => {
        dispatch(counterActions.increment(2));
    };
    const decrementBy5Handler = () => {
        dispatch(counterActions.decrement(5));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementBy2Handler}>Increment By 2</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={decrementBy5Handler}>Decrement By 5</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;