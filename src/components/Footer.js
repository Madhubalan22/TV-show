import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
  return (
    <div className='footer'>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          &copy; Madhubalan 2023
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
