import React,{useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  const [searchRes,setSearchRes]=useState('')
  console.log(bodyPart)
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setSearchRes={setSearchRes} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} Exercises={exercises} searchRes={searchRes}/>
    </Box>
  )
}

export default Home
