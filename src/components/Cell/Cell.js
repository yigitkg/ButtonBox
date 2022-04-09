import React, {useState, useEffect} from 'react'
import './Cell.css'

const Cell = ({isReset, xCoord, yCoord, targetX, targetY, toggleState}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleOnClick = () => {
    setIsToggled(!isToggled);
  } 

  useEffect(()=>{if(!isReset){setIsToggled(false)}},[isReset])
  
  useEffect(()=>{
     if  (xCoord === targetX && yCoord === targetY) setIsToggled(toggleState)
  }, [xCoord, yCoord, targetX, targetY, toggleState])

  return (
    <div className='cell' onClick={()=> handleOnClick()}>
       <span className={isToggled? 'on' : 'off'}>{isToggled? 'On' : 'Off'}</span>
    </div>
  )
}

export default Cell