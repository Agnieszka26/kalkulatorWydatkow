import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap";
import {useContext} from "react";
import {ContextList} from "../Context";
const List = ({nameList, items, variant}) => {
  const context = useContext(ContextList);
  const {
    collectionOfDataIN,
    setCollectionOfDataIN,
    collectionOfDataOUT,
    setCollectionOfDataOUT,
  } = context;

  const handleRemove = (id) => {
     nameList === "IncomeList"
      ? setCollectionOfDataIN(
          collectionOfDataIN.filter((item) => item.id !== id)
        )
      : setCollectionOfDataOUT(
          collectionOfDataOUT.filter((item) => item.id !== id)
        );
  };
  return (
    <>
      <h1 className="pt-5"> {nameList} </h1>
      <Table striped bordered hover variant={variant}>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>cost</th>
            <th>category</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const {name, cost, category, id} = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <th>{name}</th>
                <th>{cost}</th>
                <th>{category}</th>
                <th>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(id)}
                    name={id}
                  >
                    remove
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default List;
