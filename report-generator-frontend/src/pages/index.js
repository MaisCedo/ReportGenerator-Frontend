import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Layout from "../components/Layout/Layout";

import {FaHome, FaFileCsv, FaFileExcel, FaFilePdf, FaFileWord, FaBook } from "react-icons/fa";

const index = () => {

  return (
  <Container fluid className="p-0">
    <Row className='gx-0'>
      <Layout />
        <div style={{ width: '85%', marginLeft: '200px', marginTop: '-35px ' }}>
          <div className='container-listing'>
          <div className='container-contents'>
            <h1 style={{  fontWeight: 'bold'}}>Framework Report Service</h1>
            <h4 style={{ marginLeft: '20px'}}>Com essa ferramenta útil, você pode transformar qualquer arquivo em um relatório</h4>
           
            <h2 style={{ fontWeight: 'bold', marginLeft: '150px', marginTop: '35px'}}>Ferramentas</h2>
            <h4 style={{ marginLeft: '170px',marginTop: '15px ' }}>Ferramentas disponíveis no framework para transformação de relatórios</h4>
            
            <Row className='gx-0 container-card-secondary' style={{marginLeft: '100px'}}>
              <Card className='card-secondary'>
                <Card.Body>
                  <Card.Link href="/Report/CSV">
                    <Card.Subtitle className="mb-2 text-muted"> <FaFileCsv/> </Card.Subtitle>
                    <Card.Text> Gere seus relatórios em arquivos de .CSV </Card.Text>
                    <Card.Title>Relatório .CSV</Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>
              
              <Card className='card-secondary'>
                <Card.Body>
                  <Card.Link href="/Report/XLSX">
                    <Card.Subtitle className="mb-2 text-muted"> <FaFileExcel/> </Card.Subtitle>
                    <Card.Text> Gere seus relatórios em arquivos de .XLSX</Card.Text>
                    <Card.Title>Relatório .XLSX</Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card className='card-secondary'>
                <Card.Body>
                  <Card.Link href="/Report/PDF">
                    <Card.Subtitle className="mb-2 text-muted"> <FaFilePdf/> </Card.Subtitle>
                    <Card.Text> Gere seus relatórios em arquivos de .PDF</Card.Text>
                    <Card.Title>Relatório .PDF</Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>

            </Row>
            <Row className='gx-0 container-card-secondary' style={{marginLeft: '100px'}}>
            <Card className='card-secondary'>
                <Card.Body>
                  <Card.Link href="/Report/TXT">
                    <Card.Subtitle className="mb-2 text-muted"> <FaFileWord/> </Card.Subtitle>
                    <Card.Text> Gere seus relatórios em arquivos de .TXT</Card.Text>
                    <Card.Title>Relatório .TXT</Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card className='card-secondary'>
                <Card.Body>
                  <Card.Link href="/Document">
                    <Card.Subtitle className="mb-2 text-muted"> <FaBook/> </Card.Subtitle>
                    <Card.Text> Leia a documentação do framework</Card.Text>
                    <Card.Title>Documentação do framework</Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>

            </Row>
          </div>
          </div>
        </div>
    </Row>   
  </Container>
  )
}

export default index;
