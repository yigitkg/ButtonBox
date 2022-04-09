import React, {useState} from 'react'
import './Switch.css'
import Radio from '@mui/material/Radio';

const SwitchComponent = ({toggleThis}) => {
  const [selectedValue, setSelectedValue] = useState('b');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if(selectedValue === 'a'){
      toggleThis(true)
    }
    else if(selectedValue === 'b'){
      toggleThis(false)
    }
  };
  return (
    <div className='switch'>
        <div>Set To:</div>
            <div> 
                <div>On
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />Off
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>
        </div>
    </div>
  )
}

export default SwitchComponent