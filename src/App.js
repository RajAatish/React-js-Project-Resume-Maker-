import './App.css';
import Routes from './Route';
import { HashRouter } from "react-router-dom"
import { Container } from 'react-bootstrap';



function App() {

  return (
    <>   
      <Container fluid>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Container>
    </>
  );
}

export default App;
