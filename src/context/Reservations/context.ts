import { createContext } from 'react';
import { ReservationContextShape } from './types/types';

export const ReservationsStateContext = createContext<ReservationContextShape>({
    reservationsList: {},
    setReservation: () => null,
});
