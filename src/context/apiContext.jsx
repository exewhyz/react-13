import { useState, useContext, createContext } from "react";

const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  const [city, setCity] = useState("");
  

  return (
    <ApiContext.Provider value={{ city, setCity }}>
        {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
