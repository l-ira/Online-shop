import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	showMessage,
} from "../redux/slices/counterSlice";

const Counter = () => {
	const count = useSelector((state) => {
		return state.counter.value;
	}); //state - это все, что есть в нашем store
	const message = useSelector((state) => state.counter.messageSlice);

	const dispatch = useDispatch(); // хук, чтобы обратиться в наш store

	const greeting = "Hello";

	return (
		<>
			<h2>{count}</h2>
			<h2>{message}</h2>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(showMessage(greeting))}>
				Send message
			</button>
		</>
	);
};

export default Counter;
