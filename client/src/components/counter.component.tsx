import {
  increment,
  decrement,
  incrementByAmount,
} from "../REDUX/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/REDUX/store/hooks";

export default function Counter() {
  const value = useAppSelector((state) => state.counter.value); // this current value

  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-12 items-center">
      <div>Current Value: {value}</div>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
