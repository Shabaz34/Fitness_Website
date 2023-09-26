import React from 'react'
import {Stack,Typography} from '@mui/material'

import Icon from '../assets/icons/gym.png'

import CardioIcon from '../assets/icons/beck.png'
import BackIcon from '../assets/icons/back.png'
import ChestIcon from '../assets/icons/chest.png'
import LoweArmIcon from '../assets/icons/lowerArm.png'
import UpperArmIcon from '../assets/icons/upperArm.png'
import LowerLagIcon from '../assets/icons/lowerLag.png'
import UpperLagIcon from '../assets/icons/upperLag.png'
import ShouldersIcon from '../assets/icons/shoulders.png'
import WaistIcon from '../assets/icons/waist.png'
import NeckIcon from '../assets/icons/neck.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
    let iconIn=''
    switch (item) {
        case 'cardio':
            iconIn=CardioIcon
            break;
        case 'back':
            iconIn=BackIcon
            break;
        case 'chest':
            iconIn=ChestIcon
            break;  
        case 'lower arms':
            iconIn=LoweArmIcon
            break; 
        case 'waist':
            iconIn=WaistIcon
            break;     
        case 'neck':
            iconIn=NeckIcon
            break;             
        case 'upper arms':
            iconIn=UpperArmIcon
            break;  
        case 'lower legs':
            iconIn=LowerLagIcon
            break; 
        case 'upper legs':
            iconIn=UpperLagIcon
            break;     
        case 'shoulders':
            iconIn=ShouldersIcon
            break;               
        default:
            break;
    }
    // console.log(item,typeof item)

  return (
<Stack 
type="button"
alignItems="center"
justifyContent="center"
className='bodyPart-card'
sx={{
    borderTop:bodyPart===item?'4px solid #ff2625':'',
    backgroundColor:'#FFF',
    borderBottomLeftRadius:'20px',
    width:'270px',
    height:'280px',
    cursor:'pointer',
    gap:'47px'
}}
onClick={()=>{
setBodyPart(item)
setTimeout(() => {
    window.scrollTo({top:1800,left:100,behavior:'smooth'})}, "500");
}}
>
<img src={iconIn} alt="fumbbell" style={{width:'75px',height:'75px'}}></img>
<Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
</Stack>
  )
}

export default BodyPart
