import { Container } from 'react-bootstrap';
import './App.css';
import SimpleForm from './SimpleForm';
// import Profile from './Profile';

function App() {
  return (
    <Container className="p-3 d-flex flex-wrap">
      <SimpleForm />
    </Container>
  );
}

export default App;
