import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';
import { StepOne } from './Steps/StepOne';
import { StepThree } from './Steps/StepThree';
import { StepTwo } from './Steps/StepTwo';

export enum Create_Step {
    'SIZE',
    'TIME',
    'DETAILS',
}

const Create = (): ReactElement | null => {
    const { setReservation } = useReservationsStateContext();
    const history = useHistory();
    const [step, setStep] = useState<Create_Step>(Create_Step.SIZE);
    const [size, setSize] = useState<number>(0);
    const [time, setTime] = useState<string>('');

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
        setReservation((prevState) => {
            const newState = {
                ...prevState,
                [time]: {
                    size,
                    time,
                    ...vistorDetails,
                },
            };
            return newState;
        });
        history.push('/');
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
