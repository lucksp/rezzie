import { createContext } from 'react';
import { ReservationsState } from './types/types';

export const ReservationsStateContext = createContext<ReservationsState | undefined>(undefined);

export const ReservationsDispatchContext = createContext(undefined);
