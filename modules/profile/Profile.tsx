import React from 'react';
import { FiEdit3 } from "react-icons/fi";
interface ProfileProps {
  name: string;
  age: number;
  country: string;
  languages: string;
  phoneNumber: string;
  address: string;
  email: string;
  dob: string;
  gender: string;
  weight: number;
  height: number;
  activityLevel: string;
  creditCard: string;
  tokens: number;
  screeningProgress: number;
}

const CircularProgress: React.FC<{ screeningProgress: number; size?: number; strokeWidth?: number }> = ({
  screeningProgress,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (screeningProgress / 100) * circumference;

  return (
    <svg width={size} height={size} className="relative">
      <circle
        className="text-gray-200"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke="currentColor"
      />
      <circle
        className="text-primary-color"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-lg font-semibold text-gray-700"
      >
        {Math.round(screeningProgress)}%
      </text>
    </svg>
  );
};


const Profile: React.FC<ProfileProps> = ({
  name,
  age,
  country,
  languages,
  phoneNumber,
  address,
  email,
  dob,
  gender,
  weight,
  height,
  activityLevel,
  creditCard,
  tokens,
  screeningProgress
}) => {
  return (
    <div className="w-full ">
      <div className="flex space-x-6 mb-6 w-[70%]">
        <div className="w-3/5 bg-white rounded-lg flex items-center space-x-2 p-3">
          <div className=" flex-1 w-1/2  ">
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden' >
              <img src="https://i.pravatar.cc/300" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className='flex-1 w-1/2 space-y-3'>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Language/s: {languages}</p>
          </div>
        </div>
        <div className="w-2/5 bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-primary-color mb-4 text-center">Medical Screening</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-primary-color flex items-center justify-center">
                  <CircularProgress screeningProgress={screeningProgress} size={90} strokeWidth={10} />
              </div>
            </div>
          </div>
          <button className="bg-primary-color text-white py-2 px-4 rounded w-full" aria-label="Go to medical screening">
            Go to screening
          </button>
        </div>
      </div>
      {/* Personal Information Card */}
      <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <button className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3" >Edit<FiEdit3 /></button>
          </div>
            {/* Top Section */}
            <div className="grid gap-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Name</p>
                  <p>{name}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Pronouns</p>
                  <p>{gender === 'male' ? 'He/Him' : gender === 'female' ? 'She/Her' : 'They/Them'}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Age</p>
                  <p>{age}</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Phone Number</p>
                  <p>{phoneNumber}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Address</p>
                  <p>{address}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Email</p>
                  <p>{email}</p>
                </div>
              </div>
            </div>

      </div>
     
      <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Overview Medical Information</h2>
            <button className="flex justify-center items-center text-primary-color border-2 border-primary-color rounded-md px-3 py-2 gap-3" >Edit<FiEdit3 /></button>
          </div>
            {/* Top Section */}
            <div className="grid gap-4 mb-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Date Of Birth</p>
                  <p>{dob}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Age</p>
                  <p>{age}</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Gender</p>
                  <p>{gender}</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Weight</p>
                  <p>{weight} Kg</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Height</p>
                  <p>{height} cm</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-600">Activity level</p>
                  <p>{activityLevel}</p>
                </div>
              </div>
            </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Payment method</h2>
          <button className="text-primary-color" aria-label="Edit payment method">Edit</button>
        </div>
        {creditCard ? <p>Credit card: {creditCard}</p> : <p>No credit card information available</p>}
        <p>n° Tokens: {tokens}</p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-200 text-black py-2 px-4 rounded flex-1 flex items-center justify-center" aria-label="Billing">
          <span className="material-icons">credit_card</span> Billing
        </button>
        <button className="bg-gray-200 text-black py-2 px-4 rounded flex-1 flex items-center justify-center" aria-label="Start a new session">
          <span className="material-icons">event</span> Start a new Session
        </button>
        <button className="bg-gray-200 text-black py-2 px-4 rounded flex-1 flex items-center justify-center" aria-label="Upload medical files">
          <span className="material-icons">cloud_upload</span> Upload medical files
        </button>
      </div>
    </div>
  );
};

export default Profile;
