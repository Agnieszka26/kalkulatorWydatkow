import List from "./List";
import {useContext} from "react";
import {ContextList} from "../Context";

const IncomeList = () => {
  const context = useContext(ContextList);
  const {collectionOfDataIN} = context;

  return (
    <>
      <List nameList="IncomeList" items={collectionOfDataIN} variant="success" />
    </>
  );
};

export default IncomeList;
