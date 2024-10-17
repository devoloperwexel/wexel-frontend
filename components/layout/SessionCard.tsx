import React from 'react';

interface SessionCardProps {
  totalSessions: number;
  usedSessions: number;
}

const SessionCard: React.FC<SessionCardProps> = ({ totalSessions, usedSessions }) => {
  const availableSessions = totalSessions - usedSessions;

  return (
    <div className="bg-white rounded-2xl px-6 py-4 flex flex-col justify-center items-center space-y-3 shadow-md h-[300px]">
      <p className="text-[18px] font-semibold text-primary-color">Available Sessions</p>
      <div className="relative inline-block">
        <svg className="w-24 h-24" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            strokeDasharray="100, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            className="text-red-600"
            strokeDasharray={`${(usedSessions / totalSessions) * 100}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold">{totalSessions}/{usedSessions}</span>
        </div>
      </div>
      <div className='flex flex-col items-start space-y-2'>
        <p className='text-[16px] font-semibold text-black'>Total sessions: {totalSessions}</p>
        <p className='text-[16px] font-semibold text-black'>Used sessions: {usedSessions}</p>
      </div>
      <button 
          className="w-full bg-primary-color rounded-sm hover:bg-red-700 font-light text-white text-[13px] py-[5px]  mt-[50px] lg:mt-0"
          
        >
          Go to screening
        </button>
    </div>
  );
};

export default SessionCard;