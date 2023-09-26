import './App.css';
import { Route,Routes } from 'react-router-dom' ;
import {Box} from '@mui/material';
import ExerciseDetails from './Pages/ExerciseDetails';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    //sx make ir responsive, m is for marggin auto
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
