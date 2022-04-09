import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ResetButtonContainer = ({resetState}) => {
    const [isReset, setIsReset] = useState(false);
    useEffect(()=>{resetState(isReset)},[isReset])
    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={()=>setIsReset(!isReset)} size='large' variant="contained">Reset</Button>
            </Stack>
        </>
    )
}

export default ResetButtonContainer