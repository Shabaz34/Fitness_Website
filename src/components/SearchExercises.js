import React,{useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import { exerciseOption,fetchData } from '../Utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setSearchRes,setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [BodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData= async() =>{
      const bodyPartData = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption)
      setBodyParts([...bodyPartData])
    }
    fetchExercisesData();
  }, [])
  
const handleSearch=async ()=>{
  if (search){ 
    const exersicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
    const searchedExercises = exersicesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)
    || exercise.target.toLowerCase().includes(search)
    || exercise.equipment.toLowerCase().includes(search)
    || exercise.bodyPart.toLowerCase().includes(search)
     )
     console.log(searchedExercises)
     setSearch('');
     setExercises(searchedExercises)
     setSearchRes(search)
  };
}



  return (
    <Stack alignItems="center" mt="37px" justifyContent={"center"} p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"30px"}}}
      mb="50px" textAlign="center">

      Awesome Exercise you <br/>Should know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField 
        sx={{
          input:{fontWeight:'700', border:'none', borderradius:'4px'},
          width:{lg:'800px', xs:'350px'},
          backgroundColor:'#FFF',
          borderRadius:'40px',
          mr:'3px'
        }}
        height="76px" value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} 
        placeholder='Search Exercises'/>
          
        <Button className='search-btn'
    sx={{bgcolor:'#FF2625',
      color:"#fff",
      textTransform:'none',
      width:{lg:'175px',xs:'80px'},
      fontSize:{lg:'20px',xs:'14px'},
      height:'56px',
      position:'absolute',
      right:'0'    
  }}
      onClickCapture={handleSearch}  >Search</Button>

      </Box>
      <Box sx={{position:'relative', width:'100%',p:'20px'}}>
      <HorizontalScrollBar data={BodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
