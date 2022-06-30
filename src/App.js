import IncomeList from "./Components/Lists/IncomeList";
import OutcomeList from "./Components/Lists/OutcomeList";
import CustomForm from "./Components/Form/CustomForm";
import {Container, Col, Row} from "react-bootstrap";
import "bootstrap";
import {ContextProvider} from "./Components/Context";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <ContextProvider>
      <Container>
        <Row className="px-5">
          <CustomForm />
        </Row>
        <Row className="px-5">
          <Col>
            <IncomeList />
          </Col>
          <Col>
            <OutcomeList />
          </Col>
        </Row>
        <Container className="text-center p-5">
          <Summary />
        </Container>
      </Container>
    </ContextProvider>
  );
}

export default App;
