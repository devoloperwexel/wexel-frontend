"use client";

import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ContainedButton from "@/components/ui/ContainedButton";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import { TimePickerModal, TimePickerModalHandler } from "./TimePickerModal";

const CustomDateCalendar = styled(DateCalendar)(({ theme }) => ({
  "& .MuiPickersCalendarHeader-switchViewButton": {
    color: "#A51008",
  },

  "& .MuiPickersCalendarHeader-iconButton": {
    color: "#A51008",
  },

  "& .MuiPickersDay-root": {
    backgroundColor: "#F5F5F5",
    "&.Mui-selected": {
      backgroundColor: "#A51008",
      color: "#ffffff",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#b51016",
    },
    "&:hover": {
      backgroundColor: "#A510081A",
    },
  },

  "& .MuiYearCalendar-root .MuiPickersYear-yearButton": {
    color: "#A51008", 
    "&.Mui-selected": {
      backgroundColor: "#A51008", 
      color: "#ffffff",
    },
    "&:hover": {
      backgroundColor: "#A510081A", 
    },
  },
}));

export const AppointmentSchedule = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState<string>();
  const timePickerRef = useRef<TimePickerModalHandler>(null);

  const handleDateChange = (dataValue: any) => {
    timePickerRef.current?.show();
    setDate(dataValue.format("YYYY-MM-DD"));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="50%"
      paddingX={20}
      paddingBottom={6}
    >
      <div style={{ minWidth: "300px" }}>
        <TimePickerModal ref={timePickerRef} setTime={setTime} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CustomDateCalendar onChange={handleDateChange} />
        </LocalizationProvider>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="600">Date</Typography>
          <Typography fontWeight="600">
            {date && time ? date : "Not Selected"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight="600">Time</Typography>
          <Typography fontWeight="600">{time || "Not Selected"}</Typography>
        </Box>
      </div>
      <ContainedButton fullWidth backgroundColor="#000000">
        Continue
      </ContainedButton>
    </Box>
  );
};
