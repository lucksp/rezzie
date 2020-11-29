import React, { ReactElement, ReactNode, useState } from 'react';
import { ReservationsStateContext } from './context';
import { ReservationsState } from './types/types';

interface ReservationsProviderProps {
    children: ReactNode;
}
const ReservationsProvider = ({ children }: ReservationsProviderProps): ReactElement => {
    const [reservations, setReservation] = useState<ReservationsState>({});
    return (
        <ReservationsStateContext.Provider value={{ reservationsList: { ...reservations }, setReservation }}>
            {children}
        </ReservationsStateContext.Provider>
    );
};

export { ReservationsProvider };
