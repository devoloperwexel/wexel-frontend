import React from 'react';

interface StepNavigatorProps {
  steps: { id: number; name: string }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  canProceedToNextStep: (step: number) => boolean;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({
  steps,
  currentStep,
  setCurrentStep,
  canProceedToNextStep,
}) => {
  return (
    <div className="flex items-center sm:mb-6 mb-2 ">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <button
            onClick={() => {
              if (canProceedToNextStep(step.id)) {
                setCurrentStep(step.id - 1);
              }
            }}
            disabled={!canProceedToNextStep(step.id)} 
            className={`sm:p-[10px] p-2.5 rounded-md w-full sm:text-[16px] text-[10px] ${
              currentStep === step.id - 1
                ? 'bg-primary-color text-white cursor-pointer'
                : 'bg-primary-color/80 text-white cursor-not-allowed opacity-50 '
            }`}
            aria-disabled={!canProceedToNextStep(step.id)} 
          >
            {step.id}. {step.name}
          </button>
          {/* Red Line */}
          {index < steps.length - 1 && (
            <div className="h-[2px] w-full bg-primary-color" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepNavigator;
