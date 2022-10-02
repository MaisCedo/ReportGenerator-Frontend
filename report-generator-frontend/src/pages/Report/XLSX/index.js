import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Layout from "../../../components/Layout";

import {FaFileExcel} from "react-icons/fa";

const index = () => {

  return (
    <Container fluid className="p-0">
    <Row className='gx-0'>
      <Layout />
        <div style={{ width: '85%', marginLeft: '200px', marginTop: '-35px' }}>
          <div className='container-listing'>
          <div className='container-contents'>    
            <h2 style={{ fontWeight: 'bold', marginLeft: '150px', marginTop: '100px'}}><FaFileExcel style={{height: '4%',width: '4%'}}/> Convertor para XLSX</h2>
            <h4 style={{ marginLeft: '200px'}}> Converta seu .json ou .sql em um relatório de .XLSX</h4>  
            <Row className='input-container'>
              <Col className="my-1" md={12}>
                    <Form.Group className="input-file">
                      <Form.Label>Arquivo</Form.Label>
                      <Form.Control id="file" name="file" type="file"/>
                    </Form.Group>
              </Col>
              <label style={{fontWeight:'bold', marginLeft: '400px', fontSize: '30px'}}>OU</label>
              <Col>
                <Form.Group>
                  <Form.Label>Digite no Campo</Form.Label>
                  <Form.Control as={'textarea'} placeholder='Digite em formato .json ou .sql para estar transformando em um relatório .XLSX' size='md'/>
                </Form.Group>
              </Col>
            </Row>
          </div>
          </div>
        </div>
    </Row>   
  </Container>
  )
}

export default index;