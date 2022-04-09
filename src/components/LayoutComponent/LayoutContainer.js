import React from 'react'
import ItemRow from '../RowComponent/ItemRow'
import './Layout.css'

const LayoutContainer = ({isReset, childVectorData, toggleState}) => {
  return (
    <div className='layout'>
      {[4,3,2,1].map(rowNum=>
        <ItemRow isReset={isReset} yCoord={rowNum} targetX={childVectorData[0]} targetY={childVectorData[1]} toggleState={toggleState}/>)}
    </div>
  )
}

export default LayoutContainer