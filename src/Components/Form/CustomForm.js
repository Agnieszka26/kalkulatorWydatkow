import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {ContextList} from "../Context";

function CustomForm() {
  const context = useContext(ContextList);
  const {
    collectionOfDataIN,
    setCollectionOfDataIN,
    collectionOfDataOUT,
    setCollectionOfDataOUT,
  } = context;
  const [valueCheckBox, setValueCheckBox] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    data.type[0] === "IN"
      ? setCollectionOfDataIN((oldArray) => [...oldArray, data])
      : setCollectionOfDataOUT((oldArray) => [...oldArray, data]);
  };
  const categories = [
    "podstawowe",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
  ];

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded border border-secondary p-4"
    >
      <Container className="p-4">
        <Form.Check
          inline
          type="checkbox"
          id="IN"
          label="IN"
          value="IN"
          checked={valueCheckBox === "IN"}
          {...register("type", {
            onChange: (e) => setValueCheckBox(e.target.value),
          })}
        />
        <Form.Check
          inline
          type="checkbox"
          id="OUT"
          label="OUT"
          value="OUT"
          checked={valueCheckBox === "OUT"}
          {...register("type", {
            onChange: (e) => setValueCheckBox(e.target.value),
          })}
        />
      </Container>
      <Container className="pt-3">
        <Form.Control type="text" id="id" {...register("id")} />
        <Form.Text muted>ID (remember, it must be unique)</Form.Text>
      </Container>
      <Container className="pt-3">
        <Form.Control type="text" id="name" {...register("name")} />
        <Form.Text muted>What is the name of your come?</Form.Text>
      </Container>
      <Container className="pt-3">
        <Form.Control type="number" id="cost" {...register("cost")} />
        <Form.Text muted>What is the value (price)? </Form.Text>
      </Container>
      <Container className="pt-3">
        <Form.Select
          aria-label="Default select example"
          {...register("category")}
        >
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </Form.Select>
      </Container>
      <Container className="pt-3 d-grid gap-2">

        <Button variant="success" type="submit" size="lg">
          Add
        </Button>
      </Container>
    </Form>
  );
}

export default CustomForm;
