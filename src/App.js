import logo from './logo.svg';
import './App.css';
import ProgrammingPage from './pages/ProgrammingPage';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <ChakraProvider>
      <header >
      <Navbar />

      </header>
        <ProgrammingPage/>
      
      </ChakraProvider>
  );
}

export default App;
