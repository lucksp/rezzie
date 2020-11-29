import { useContext } from 'react';
import { ReservationsStateContext } from '../context';
import { ReservationContextShape } from '../types/types';

export const useReservationsStateContext = (): ReservationContextShape => {
    const context = useContext(ReservationsStateContext);
    if (context === undefined) {
        throw new Error('useReservationsStateContext must be used within a ReservationsProvider');
    }
    return context;
};
