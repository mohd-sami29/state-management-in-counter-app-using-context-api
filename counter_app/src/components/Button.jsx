import React from "react";
import { useContext } from "react";
import { counterContex } from "./context/CounterContext";

function Button() {
  const { increment, decrement, count } = useContext(counterContex);
  return (
    <>
      <div className="text-center mt-32">
        <button
          onClick={increment}
          className="border border-gray-400 rounded-sm p-1 font-semibold"
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          onClick={decrement}
          className="border border-gray-400 rounded-sm p-1 font-semibold"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Button;
