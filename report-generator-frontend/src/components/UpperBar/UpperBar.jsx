import { Row } from "react-bootstrap";
import Header from "../Header";

const UpperBar = (props) => {
 

  return (
    <>
        <>
          <Header>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
            </div>
          </Header>
          <Row className="gx-0 container-card-primary">
            <main>{props.children}</main>
          </Row>
        </>
    </>
  );
}

export default UpperBar;
