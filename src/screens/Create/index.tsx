import React, { ReactElement, useEffect, useState } from 'react';
import { StepOne } from './Steps/StepOne';
import { StepThree } from './Steps/StepThree';
import { StepTwo } from './Steps/StepTwo';

export enum Create_Step {
    'SIZE',
    'TIME',
    'DETAILS',
}

const Create = (): ReactElement | null => {
    const [step, setStep] = useState<Create_Step>(Create_Step.SIZE);
    const [size, setSize] = useState<number>();
    const [time, setTime] = useState<Date>();
    const [details, setDetails] = useState<{ name: string; notes: string }>();

    useEffect(() => {
        if (step === Create_Step.SIZE && size) {
            setStep(Create_Step.TIME);
        }
    }, [size, step]);

    useEffect(() => {
        if (step === Create_Step.TIME && time) {
            setStep(Create_Step.DETAILS);
        }
    }, [step, time]);

    const handleSave = (vistorDetails: { name: string; notes: string }) => {
        setDetails(vistorDetails);
        console.log('save rez');
    };

    if (step === Create_Step.SIZE) {
        return <StepOne setSize={setSize} />;
    }
    if (step === Create_Step.TIME) {
        return <StepTwo setTime={setTime} />;
    }
    if (step === Create_Step.DETAILS) {
        return <StepThree handleSave={handleSave} />;
    }

    return null;
};

export { Create };
