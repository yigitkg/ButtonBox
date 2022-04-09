import React from 'react'
import Cell from '../Cell/Cell'
import './ItemRow.css'

const ItemRow = ({isReset, yCoord, targetX, targetY, toggleState}) => {
    return (
    <div className='rowstyle'>
      {[1,2,3,4].map(num=>
         <Cell isReset={isReset} yCoord={yCoord} xCoord={num} targetX={targetX} targetY={targetY} toggleState={toggleState}/>
      )}
    </div>
  )
}

export default ItemRow