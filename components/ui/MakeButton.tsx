import * as React from 'react';
import Button from '@mui/material';


const Button = () => {
    return (
        <Button
            sx={{
                borderRadius: '5px',
                textTransform: 'none',
                paddingX: '10px',
                paddingY: '12px',
                backgroundColor: '#A51008',
                color: '#ffffff',
                '&:hover': {
                backgroundColor: '#7f0007',
                },
                '&:active': {
                backgroundColor: '#A51008',
                },
            }}
            fullWidth
            >
        </Button>
    )
}

export default Button