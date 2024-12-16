"use client";

import { Box, Typography } from "@mui/material";
import DoctorDetail from "models/doctor-detail.model";
import Image from "next/image";
import { truncateText } from "utils/strings";
import { AppointmentSchedule } from "./AppointmentSchedule";
import { useState } from "react";
import Payment from "./payment/Payment";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/BackButton";
import ContainedButton from "@/components/ui/ContainedButton";
import { useCreateAppointmentMutation } from "services/appointment-api";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useAppointmentDate } from "hooks/useAppointmentDate";

type Props = {
  doctorDetail: DoctorDetail;
};

const DoctorViewPage = ({ doctorDetail }: Props) => {
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const { appointmentDate } = useAppointmentDate();
  const [appointmentId, setAppointmentId] = useState<string>();
  const router = useRouter();
  const [createAppointment, { isLoading: isCreating }] =
    useCreateAppointmentMutation();
  const { data: sessionData } = useSession();
  const user = sessionData?.user;
  const { specialty, description, hourlyRate, id } = doctorDetail;
  const handleOnclick = async () => {
    if (time && date) {
      try {
        const response = await createAppointment({
          userId: user?.id,
          body: {
            id,
            appointmentTime: appointmentDate,
          },
        });

        setAppointmentId((response as any).data.data.id);
      } catch (e) {
        toast.error("Some thing went to wrong! Please try again later");
      }
    }
  };

  const { profilePictureUrl, name } = doctorDetail.user;

  const formattedCurrencyAmount =
    new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(hourlyRate) + "€";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="px-8 sm:px-10 my-10">
      <Box paddingTop={1.8}>
        {!appointmentId && <BackButton onClick={handleBackClick} />}
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          height="60vh"
          bgcolor="#ffffff"
          borderRadius={2}
          marginTop={4}
          padding={3}
        >
          <>
            {appointmentId ? (
              <Payment
                appointmentId={appointmentId}
                doctorName={name}
                doctorSpecialty={specialty}
                appointmentDate={date!}
                appointmentTime={time!}
                totalAmount={hourlyRate}
              />
            ) : (
              <>
                <Box
                  width="50%"
                  borderRight="2px dashed"
                  boxSizing="border-box"
                  paddingRight={20}
                >
                  <Image
                    alt=""
                    src={profilePictureUrl ?? "/images/doctor.jpeg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "80%", borderRadius: 6 }}
                  />
                  <Typography
                    fontWeight="700"
                    fontSize="22px"
                    marginTop={2}
                  >${truncateText(name, 50)}</Typography>
                  <Typography color="#A51008" fontWeight="500" fontSize="17">
                    {specialty}
                  </Typography>
                </Box>
                <Box px={4}>
                  <Typography fontSize="14" marginTop={1.5}>
                    {description}
                  </Typography>
                  <Box display="flex" flexDirection="row" alignItems="end">
                    <Typography
                      fontWeight="700"
                      fontSize="32px"
                      marginTop={1.5}
                    >
                      {Number.isInteger(hourlyRate)
                        ? `${hourlyRate}€`
                        : formattedCurrencyAmount}
                    </Typography>
                    <Typography
                      fontSize="28"
                      marginBottom={0.5}
                      marginLeft={0.4}
                    >
                      /30min
                    </Typography>
                  </Box>
                  <ContainedButton
                    sx={{ width: 180, mt: 4 }}
                    backgroundColor="#000000"
                    onClick={handleOnclick}
                    disabled={isCreating}
                  >
                    Continue
                  </ContainedButton>
                </Box>
              </>
            )}
          </>
        </Box>
      </Box>
    </div>
  );
};
export default DoctorViewPage;
