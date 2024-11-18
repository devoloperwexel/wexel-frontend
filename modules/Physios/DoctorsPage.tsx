"use client";

//import SearchBox from "@/components/ui/SearchBox";
import { DoctorDetailCard } from "./DoctorDetailsCard";
import { Box, Grid } from "@mui/material";
import DoctorDetail from "models/doctor-detail.model";
import { useState } from "react";

type Props = {
  doctorDetails: DoctorDetail[];
};
export default function DoctorsPage({ doctorDetails }: Readonly<Props>) {
  
  const [isMedicalScreeningComplete, setMedicalScreeningComplete] = useState(
    false 
  );

  return (
    <>
      {/* <Box marginBottom={5}>
        <SearchBox />
      </Box> */}
      <div >
          <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-10">Welcome</h1>
        </div> 
      <div>
          {!isMedicalScreeningComplete && (
            <div className="bg-[#ECD0CF] p-4  text-center text-2xl flex justify-between items-center w-full">
              <div className="flex"><p className="font-black text-black">Reminder:</p><p className="font-medium ">Finish the Medical screening to use full service functionality</p></div>
              <div className="flex justify-center items-center">
              <button 
              className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px] px-16"
              
            >
              Go to screening
            </button>
              </div>
            </div>
          )}
      </div>
      <div className="px-8 sm:px-10 my-10 z-10 ">
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {doctorDetails.map((doctorDetail) => (
          <Grid key={doctorDetail.id} item xs={5} sm={43} md={3}>
            <DoctorDetailCard doctorDetail={doctorDetail} />
          </Grid>
        ))}
      </Grid>
      </div>
    </>
  );
}
