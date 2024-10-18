import React from 'react';

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
    <div className="w-full mx-auto p-8">
      <div className="flex space-x-6 mb-6 w-full">
        <div className="w-3/5 bg-white rounded-lg flex items-center p-3 space-x-2">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-gray-600 mr-2 ">
            <img src="https://i.pravatar.cc/300" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <div className='space-y-3'>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Language/s: {languages}</p>
          </div>
        </div>
        <div className="w-2/5 bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-primary-color mb-4">Medical Screening</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-primary-color flex items-center justify-center">
                <span className="text-xl font-bold">{screeningProgress}%</span>
              </div>
            </div>
          </div>
          <button className="bg-primary-color text-white py-2 px-4 rounded w-full" aria-label="Go to medical screening">
            Go to screening
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <button className="text-primary-color" aria-label="Edit personal information">Edit</button>
        </div>
        <p>Name: {name}</p>
        <p>Pronouns: {gender === 'male' ? 'He/Him' : gender === 'female' ? 'She/Her' : 'They/Them'}</p>
        <p>Age: {age}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Address: {address}</p>
        <p>Email: {email}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Overview Medical Information</h2>
          <button className="text-primary-color" aria-label="Edit medical information">Edit</button>
        </div>
        <p>Date Of Birth: {dob}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Weight: {weight} Kg</p>
        <p>Height: {height} cm</p>
        <p>Activity level: {activityLevel}</p>
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
