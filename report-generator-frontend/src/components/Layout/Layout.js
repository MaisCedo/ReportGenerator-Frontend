import { Container, Row } from "react-bootstrap";

import Sidebar from "../Sidebar";
import UpperBar from '../UpperBar/UpperBar'

const Layout = ({ children }) => {

  return (
    <Container fluid className="p-0">
      <Row className='gx-0' >
        <div style={{ width: '15%' }}>
          <Sidebar />
        </div>
        <div style={{ width: '85%' }}>
          <UpperBar>{ children }</UpperBar>
        </div>
      </Row>
    </Container>
  );
}

export default Layout;