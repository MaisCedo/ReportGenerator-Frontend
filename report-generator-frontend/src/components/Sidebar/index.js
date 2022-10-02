import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {FaHome, FaFileCsv, FaFileExcel, FaFilePdf, FaFileWord, FaBook } from "react-icons/fa";
// import logo from '../../img/logo.png';

const Sidebar = () => {
    return (
        <>
            <Navbar className='custom-nav-bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="me-auto flex-column custom-nav">

                    <Nav.Link href="/"> <span className='icon-sidebar'> <FaHome /> </span> Home</Nav.Link>
                    <Nav.Link href="/Report/CSV"> <span className='icon-sidebar'> <FaFileCsv /> </span> Relatório CSV </Nav.Link>
                    <Nav.Link href="/Report/XLSX"> <span className='icon-sidebar'> <FaFileExcel /> </span> Relatório XLSX </Nav.Link>
                    <Nav.Link href="/Report/PDF"> <span className='icon-sidebar'> <FaFilePdf/> </span> Relatório PDF </Nav.Link>
                    <Nav.Link href="/Report/TXT"> <span className='icon-sidebar'> <FaFileWord /> </span> Relatório TXT </Nav.Link>
                    <Nav.Link href="/Document"> <span className='icon-sidebar'> <FaBook /> </span> Documentação do framework </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default Sidebar;

