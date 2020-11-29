export interface Reservation {
    name: string;
    time: Date;
    count: number;
    id: number;
    notes: string;
}

export interface ReservationsState {
    [id: string]: Reservation;
}

export interface ReservationContextShape {
    reservationsList: ReservationsState;
    setReservation: React.Dispatch<React.SetStateAction<ReservationsState>>;
}
