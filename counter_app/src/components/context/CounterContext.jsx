import { createContext, useState } from "react";

export const counterContex = createContext(0);

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <counterContex.Provider value={{ increment, decrement, count }}>
      {children}
    </counterContex.Provider>
  );
};

export default ContextProvider;
