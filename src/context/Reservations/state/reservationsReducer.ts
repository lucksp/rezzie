import { ReservationsState } from '../types/types';

export const InitialReservationState: ReservationsState = {
    reservations: [],
};
export const reservationsReducer = (state: ReservationsState): ReservationsState => {
    return state;
};
