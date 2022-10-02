import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const Header = ({ children }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='header'>
                <Container>
                    <Nav className="me-auto">
                        <span className='header-title' style={{ fontWeight: '600' }}>Home /</span>
                    </Nav>
                    
                </Container>
                <span className="me-auto" style={{ fontWeight: '600' }}>
                    <main >{children}</main>
                </span>
            </Navbar>


        </>
    )
}
export default Header;
