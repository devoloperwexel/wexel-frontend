import Row from "@/components/ui/Row";
import { Box, Divider, Typography } from "@mui/material";
import { numberToCurrency } from "utils/currency";
import { truncateText } from "utils/strings";

type Props = {
  doctorName: string;
  doctorSpecialty: string;
  totalAmount: number;
  appointmentDate: string;
  appointmentTime: string;
  note?: string;
};
const Payment = ({
  doctorName,
  doctorSpecialty,
  totalAmount,
  appointmentDate,
  appointmentTime,
  note,
}: Props) => {
  return (
    <Box
      width="50%"
      borderRight="2px dashed"
      boxSizing="border-box"
      paddingRight={20}
    >
      <Typography
        fontWeight="700"
        fontSize="22px"
        marginTop={2}
      >{`Dr. ${truncateText(doctorName, 50)}`}</Typography>
      <Typography
        color="#A51008"
        fontWeight="500"
        fontSize="17"
        marginBottom={4}
      >
        {doctorSpecialty}
      </Typography>
      <Divider flexItem />
      <Row marginTop={4} marginBottom={2}>
        <Typography fontWeight="600">Date</Typography>
        <Typography fontWeight="600">{appointmentDate}</Typography>
      </Row>
      <Row marginBottom={3}>
        <Typography fontWeight="600">Time</Typography>
        <Typography fontWeight="600">{appointmentTime}</Typography>
      </Row>
      <Divider flexItem />
      <Row marginTop={4}>
        <Typography fontWeight="600">Total</Typography>
        <Typography fontWeight="600" fontSize={30}>
          {numberToCurrency(totalAmount)}
        </Typography>
      </Row>
    </Box>
  );
};

export default Payment;
