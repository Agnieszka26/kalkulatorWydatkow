import List from "./List";
import {useContext} from "react";
import {ContextList} from "../Context";
const OutcomeList = () => {
  const context = useContext(ContextList);
  const {collectionOfDataOUT} = context;

  return (
    <>
      <List nameList="OutcomeList" items={collectionOfDataOUT} variant />
    </>
  );
};

export default OutcomeList;
