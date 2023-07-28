import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar className="bg-body-tertiary bg-primary-subtle">
        <Container>
          <Navbar.Brand>The Tin Foil Hat Collective</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header;