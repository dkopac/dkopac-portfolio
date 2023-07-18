import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Header/>
          <PortfolioContainer/>
          <Footer/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
