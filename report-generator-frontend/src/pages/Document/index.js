import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Layout from "../../components/Layout";

import {FaBook} from "react-icons/fa";

const index = () => {

  return (
    <Container fluid className="p-0">
    <Row className='gx-0'>
      <Layout />
        <div style={{ width: '85%', marginLeft: '200px', marginTop: '-35px' }}>
          <div className='container-listing'>
          <div className='container-contents'>    
            <h2 style={{ fontWeight: 'bold', marginLeft: '150px', marginTop: '100px'}}><FaBook style={{height: '4%',width: '4%'}}/> Documentação do Framework</h2>
          </div>
          </div>
        </div>
    </Row>   
  </Container>
  )
}

export default index;