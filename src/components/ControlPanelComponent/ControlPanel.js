import React, { useState } from 'react'
import Vector from '../Coordinates/Vector'
import SwitchComponent from '../Switches/SwitchComponent'
import './ControlPanel.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ControlPanel = ({sendVector}) => {
  const [xCoordinate, setXCoordinate] = useState();
  const [yCoordinate, setYCoordinate] = useState();
  const [toggleState, setToggleState] = useState(false);

  const toggleThis = (toggle) => {
    setToggleState(!toggle);
  }
  const coord = [];
  const processVectorX = (value) => {
    setXCoordinate(value)
  }
  const processVectorY = (value) => {
    setYCoordinate(value)
  }

  if(xCoordinate && yCoordinate){
    coord.push(xCoordinate)
    coord.push(yCoordinate)
  }

  const handleOnClick = () => {
    if(coord[0] !== null && coord[1] !== null){
      sendVector(coord, toggleState)
    }
  }
  return (
    <>
      <div className='controlpanel'> 
        <div className='manueloverride'>Manuel Override</div>
        <div className='vectors'>
          <Vector  vector={'X'} processVector={processVectorX}/>
          <Vector vector={'Y'} processVector={processVectorY} />
        </div>
        <div className='switch'><SwitchComponent toggleThis={toggleThis}/></div>
        <div className='confirmbutton'>
          <Stack spacing={2} direction="row">
            <Button onClick={handleOnClick} size='large' variant="contained">Confirm</Button>
          </Stack></div>
      </div>
    </>
  )
}

export default ControlPanel