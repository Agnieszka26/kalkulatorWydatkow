import {createContext, useState} from "react";
export const ContextList = createContext();

export const ContextProvider = ({children}) => {
  const [collectionOfDataIN, setCollectionOfDataIN] = useState([
    {type: ["in"], id: 1, name: "wyplata", cost: 10000, category: "podstawowe"},
    {type: ["in"], id: 2, name: "wyplata", cost: 10000, category: "podstawowe"},

  ]);
  const [collectionOfDataOUT, setCollectionOfDataOUT] = useState([
    
    {type: ["out"], id: 3, name: "zakupy", cost: 50, category: "podstawowe"},
    {type: ["out"], id: 4, name: "zakupy", cost: 50, category: "podstawowe"},
  ]);

  const values = {
    collectionOfDataIN,
    setCollectionOfDataIN,
    collectionOfDataOUT,
    setCollectionOfDataOUT,
  };
  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};
