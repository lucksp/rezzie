import React, { ReactElement, ReactNode, useReducer } from 'react';
import { ReservationsStateContext } from './context';
import { InitialReservationState, reservationsReducer } from './state/reservationsReducer';

interface ReservationsProviderProps {
    children: ReactNode;
}
const ReservationsProvider = ({ children }: ReservationsProviderProps): ReactElement => {
    const [state] = useReducer(reservationsReducer, InitialReservationState);
    return <ReservationsStateContext.Provider value={state}>{children}</ReservationsStateContext.Provider>;
};

export { ReservationsProvider };
