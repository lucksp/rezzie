interface Reservation {
    name: string;
    time: number;
    count: number;
    id: number;
}

export interface ReservationsState {
    reservations: Reservation[];
}
