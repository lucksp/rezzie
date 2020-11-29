export interface Reservation {
    name: string;
    time: string;
    size: number;
    notes: string;
}

export interface ReservationsState {
    [time: string]: Reservation;
}

export interface ReservationContextShape {
    reservationsList: ReservationsState;
    setReservation: React.Dispatch<React.SetStateAction<ReservationsState>>;
}
