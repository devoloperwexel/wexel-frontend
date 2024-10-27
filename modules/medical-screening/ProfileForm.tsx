'use client';

import React, { useState } from 'react';
import StepNavigator from './StepNavigator';
import PersonalInformation from './PersonalInformationForm';
import MedicalInformation from './MedicalInformationForm';
import MedicalScreening from './MedicalScreeningForm';

const ProfileForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 1, name: 'Personal Information' },
    { id: 2, name: 'Medical Information' },
    { id: 3, name: 'Medical Screening' }
  ];

  const goToStep = (step: number) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInformation onComplete={() => handleStepComplete(1)} />;
      case 1:
        return <MedicalInformation onComplete={() => handleStepComplete(2)} />;
      case 2:
        return <MedicalScreening onComplete={() => handleStepComplete(3)} />;
      default:
        return null;
    }
  };

  const handleStepComplete = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const canProceedToNextStep = (step: number) => {
    return completedSteps.includes(step);
  };

  const isCurrentStepCompleted = completedSteps.includes(currentStep + 1);

  return (
    <div className="xl:px-32 xl:py-10 sm:px-4 sm:py-4 p-8 md:px-[55px] md:py-10  min-h-screen bg-[#F9F5F5]">
      <button 
        className="text-black text-[20px] font-bold"
      >
        &lt;-- Back
      </button>
      <div className='sm:px-8 sm:py-3'>
        <div className='mt-2 sm:space-y-2 space-y-1 sm:mb-6 mb-2'>
            <h2 className="text-xl font-bold text-primary-color">Welcome</h2>
            <h2 className="text-xl font-bold text-black ">Create your Profile</h2>
        </div>
        <div className='sm:py-3 py-2'>
            <StepNavigator
                currentStep={currentStep}
                steps={steps}
                setCurrentStep={goToStep}
                canProceedToNextStep={canProceedToNextStep}
            />
        </div>
        
        <div className="py-4">{renderStepContent()}</div>
        
        <div className='w-full flex justify-center items-center sm:pt-[30px] pt-2 '>
            <div className="xl:w-[70%] md:w-full w-full flex justify-between sm:gap-x-16 gap-x-8">
                <button className="bg-transparent border-[1px] border-primary-color text-primary-color p-[12px] px-4 rounded w-full" 
                        onClick={() => goToStep(currentStep - 1)} 
                        disabled={currentStep === 0}>
                  { currentStep == 2 ? 'Remind me later' : 'Cancel'}
                </button>
                <button
                    onClick={() => goToStep(currentStep + 1)}
                    disabled={!isCurrentStepCompleted}
                    className={`p-[12px] px-4 rounded w-full border-2 ${
                        isCurrentStepCompleted
                        ? 'bg-primary-color text-white border-primary-color'
                        : 'bg-gray-400 text-white border-gray-300'
                    } ${currentStep == 2 ? 'bg-primary-color text-white' : 'bg-gray-400 text-white border-gray-300' }`}
                >
                    { currentStep == 2 ? 'Start Screening Now' : 'Save'}
                </button>
            </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProfileForm;
