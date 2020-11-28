import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';

const ReservationList = (): ReactElement => {
    const { reservations } = useReservationsStateContext();
    const history = useHistory();

    const handleCreate = () => {
        history.push('/create');
    };

    if (!reservations.length) {
        return (
            <div>
                Sorry, no reservations yet.
                <div>
                    <button type="button" onClick={handleCreate}>
                        Create Reservation
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div>
            {reservations.map((rez) => (
                <div key={rez.id}>{JSON.stringify(rez)}</div>
            ))}
        </div>
    );
};

export { ReservationList };
