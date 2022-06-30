import {useContext} from "react";
import {ContextList} from "../Context";
import {useEffect} from "react";
import "bootstrap";

function Summary() {
  const context = useContext(ContextList);
  const {collectionOfDataIN, collectionOfDataOUT} = context;
  const adding = (arr, sum = 0) => {
    return arr.map((item) => {
      return (sum += Number(item.cost));
    });
  };

  let difference = collectionOfDataOUT[0]
    ? adding(collectionOfDataIN)[adding(collectionOfDataIN).length - 1] -
      adding(collectionOfDataOUT)[adding(collectionOfDataOUT).length - 1]
    : adding(collectionOfDataIN)[adding(collectionOfDataIN).length - 1];

  const myStyle =
    difference > 0
      ? "text-success border rounded "
      : "text-danger border rounded";
  return <h1 className={myStyle}>Your budget: {difference}</h1>;
}

export default Summary;
