import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination' 
import {Box,Typography,Stack} from '@mui/material/'
import ExerciseCard from './ExerciseCard'
import { exerciseOption,fetchData } from '../Utils/FetchData'

const Exercises = ({Exercises,setExercises,bodyPart,searchRes}) => {
const [currentPage, setcurrentPage] = useState(1)
const exercisesonPage=9

const indexOfLastExercise=currentPage*exercisesonPage;

const indexOffFirstExercise=indexOfLastExercise-exercisesonPage;

const currentExercises=Exercises.slice(indexOffFirstExercise,indexOfLastExercise)


const paginate=(e,value)=>{
  console.log(value)
  setcurrentPage(value);
  window.scrollTo({top:1800,behavior:"smooth"})
}

useEffect(()=>{
const fetchExercisesData = async ()=>{
  let exerciseData = [];
  console.log(bodyPart)

  if(bodyPart==='all'){
    exerciseData =await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
  } else {  
    exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOption);
  }
  setExercises(exerciseData)
}
fetchExercisesData();
},[bodyPart])

  // console.log(Exercises)
  return (
<Box id="exercises"
sx={{mt:{lg:'110px'}}}
mt='50px'
p='20px'
>
{Exercises.length>0?
 <Typography variant='h3' mb="46px"> 
  Showing result {searchRes}  
</Typography>:'Showing result'}

<Stack direction="row" sx={{ gap:{lg:'107px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">


{currentExercises.map((exercise,index)=> (
 <ExerciseCard key={index} 
 exercise={exercise}/>
))}  
</Stack>
<Stack mp="100px" alignItems="center">
{Exercises.length>exercisesonPage && (
  <Pagination color='standard' shape='rounded' defaultPage={1}
  count={Math.ceil(Exercises.length/exercisesonPage)}
  page={currentPage}
  onChange={paginate}
  size='large'
  />
)}

</Stack>
</Box>
  )
}

export default Exercises
