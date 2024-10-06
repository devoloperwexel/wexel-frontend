import * as React from 'react';
import Box from "@mui/material/Box";
import { useTheme,alpha } from "@mui/material/styles";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Typography } from '@mui/material';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function BasicDateCalendar() {
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor:'#ffffff',borderRadius: '12px'}} padding={2}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingBottom={1}>
            <Typography fontSize={20} fontWeight={600}>
                Calender
            </Typography>
            <Button sx={{borderRadius:'12px',textTransform:'none'}}  >
                <Typography fontSize={14} fontWeight={600} color={'#A51008'} >
                    View All
                </Typography>
                <ChevronRightIcon sx={{color:alpha(theme.palette.common.black, 0.50)}}/>
            </Button>
        </Box>
        <Box sx={{backgroundColor:alpha(theme.palette.common.black, 0.05),borderRadius:'12px'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    sx={{
                    '.MuiPickersDay-dayWithMargin': {
                        '&.Mui-selected': {
                        backgroundColor: '#A51008',
                        color: '#fff'},
                    },
                }}
                />
            </LocalizationProvider>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'} padding={2}>
            <CalendarTodayOutlinedIcon style={{ fill: '#A51008' }} />
            <Typography fontSize={12} display={'flex'} justifyContent={'center'}>
                No upcoming appointments
            </Typography>
        </Box>
        <Box width={'100%'}>
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
                Make Appointment
        </Button>
        </Box>
    </Box>
  );
}

