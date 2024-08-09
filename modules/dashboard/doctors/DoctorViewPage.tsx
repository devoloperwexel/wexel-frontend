import { Box, Typography } from "@mui/material";
import DoctorDetail from "models/doctor-detail.model";
import Image from "next/image";
import { truncateText } from "utils/strings";
import { AppointmentSchedule } from "./AppointmentSchedule";

type Props = {
  doctorDetail: DoctorDetail;
};
const DoctorViewPage = ({ doctorDetail }: Props) => {
  const { specialty, profileImageUrl, description, hourlyRate, name } =
    doctorDetail;

  const formattedCurrencyAmount =
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(hourlyRate) + "$";

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
            src={profileImageUrl}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "44%", borderRadius: 6 }}
          />
          <Typography
            fontWeight="700"
            fontSize="22px"
            marginTop={2}
          >{`Dr. ${truncateText(name, 50)}`}</Typography>
          <Typography color="#A51008" fontWeight="500" fontSize="17">
            {specialty}
          </Typography>
          <Typography fontSize="14" marginTop={1.5}>
            {description}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="end">
            <Typography fontWeight="700" fontSize="32px" marginTop={1.5}>
              {Number.isInteger(hourlyRate)
                ? `${hourlyRate}$`
                : formattedCurrencyAmount}
            </Typography>
            <Typography fontSize="28" marginBottom={0.5} marginLeft={0.4}>
              /h
            </Typography>
          </Box>
        </Box>
        <AppointmentSchedule />
      </Box>
    </Box>
  );
};
export default DoctorViewPage;
