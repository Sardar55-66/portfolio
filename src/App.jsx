import './App.css'
import { Description } from './Components/Description/Description';
import { Header } from './Components/Header/Header';
import { MainPart } from './Components/MainPart/MainPart'
import Container from 'react-bootstrap/Container';
import { SecondPart } from './Components/MainPart/SecondPart';
import { ThirdPart } from './Components/MainPart/ThirdPart';
import { FourthPart } from './Components/MainPart/FourthPart';

function App() {

  return (
    <>
      <Container className='wrapper' fluid>
          <Header/>
          <Description/>
          <MainPart/>
          <SecondPart/>
          <ThirdPart/>
          <FourthPart/>
      </Container>
    </>
  )
}

export default App
