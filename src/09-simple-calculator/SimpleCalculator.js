import { useReducer } from "react";

const initialState = { numberOne: null, numberTwo: null, result: null };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NUM_ONE": {
      console.log("numOne", action.payload);
      return { ...state, numberOne: action.payload };
    }
    case "ADD_NUM_TWO": {
      console.log("numTwo", action.payload);
      return { ...state, numberTwo: action.payload };
    }
    case "ADD":
      return { ...state, result: state.numberOne + state.numberTwo };
    case "SUBTRACT":
      return { ...state, result: state.numberOne - state.numberTwo };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            onClick={() => dispatch({ type: "ADD_NUM_ONE", payload: number })}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            onClick={() => dispatch({ type: "ADD_NUM_TWO", payload: number })}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div>
        <h2>{state.result ? `Result: ${state.result}` : "No result yet"}</h2>
      </div>
    </div>
  );
}
