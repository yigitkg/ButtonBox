import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import './Vector.css'

const Vector = ({vector, processVector}) => {
  return (
    <>
        <div className='vector'>
            <div>{vector}:</div>
            <TextField id="outlined-basic" onChange={(e) =>{processVector(parseInt(e.target.value), vector)}} size='small' variant="outlined" />
        </div>
    </>
  )
}

export default Vector