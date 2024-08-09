import ContainedButton from "@/components/ui/ContainedButton";
import { Box, Typography } from "@mui/material";
import Appointment from "models/appointment.model";
import Image from "next/image";
import { truncateText } from "utils/strings";
import { formatISODateTime } from "utils/time";
import Note from "./Note";

type Props = {
  appointment: Appointment;
};
const AppointmentPageView = ({ appointment }: Props) => {
  const { id, doctorDetail, note, appointmentTime } = appointment;

  const { formattedDate, formattedTime } = formatISODateTime(appointmentTime);

  return (
    <Box paddingTop={5} paddingBottom={3} paddingLeft={2} paddingRight={4}>
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        height="85vh"
        bgcolor="#ffffff"
        borderRadius={2}
        padding={3}
      >
        <Box
          width="50%"
          borderRight="2px dashed"
          boxSizing="border-box"
          paddingRight={20}
        >
          <Image
            alt=""
            src={doctorDetail.profileImageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "44%", borderRadius: 6 }}
          />
          <Typography
            fontWeight="700"
            fontSize="22px"
            marginTop={2}
          >{`Dr. ${truncateText(doctorDetail.name, 50)}`}</Typography>
          <Typography color="#A51008" fontWeight="500" fontSize="17">
            {doctorDetail.specialty}
          </Typography>
          <Typography
            color="#1B1999"
            fontWeight="500"
            fontSize="17"
            marginTop={2}
          >
            {`Appointment ID: ${id}`}
          </Typography>
          <Typography fontWeight="500" fontSize="17">
            {formattedDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formattedTime}
          </Typography>
          <ContainedButton
            backgroundColor="#009BFF"
            sx={{ borderRadius: 2, textTransform: "none", marginTop: 2 }}
          >
            Join Now
          </ContainedButton>
        </Box>

        <Note note={note} />
      </Box>
    </Box>
  );
};
export default AppointmentPageView;
