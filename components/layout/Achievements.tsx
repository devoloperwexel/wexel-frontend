import React from 'react';
import HoursSvg from '../icons/HoursSvg';
import RepsSvg from '../icons/RepsSvg';

interface AchievementsProps {
  hours: number;
  reps: number;
  totalReps: number;
}

const Achievements: React.FC<AchievementsProps> = ({ hours, reps, totalReps }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-[350px]">
        <div className='flex flex-col justify-center text-left px-2'>
            <h2 className="text-xl font-semibold">Achievements this week</h2>
            <p className=" text-gray-600 py-1">You are on fire!!!! <span role="img" aria-label="fire">🔥</span></p>
        </div>

      <div className="flex justify-start items-center space-x-10 pl-8 pr-0 mt-3">
        <div className="flex flex-col items-center bg-[#F46483] rounded-full p-6 w-24 h-36 shadow-lg text-white">
          <div className='h-20'><HoursSvg/></div>
          <p className="">hours</p>
          <p className="text-2xl font-medium">{hours}</p>
        </div>
        <div className="flex flex-col items-center bg-[#FEA8A5] rounded-full p-6 w-24 h-36 shadow-lg text-white">
          <div className='h-20 mt-[10px]'><RepsSvg/></div>
          <p className="">Reps</p>
          <p className="text-2xl font-medium">{reps}/{totalReps}</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;