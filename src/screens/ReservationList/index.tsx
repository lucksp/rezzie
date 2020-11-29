import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '~components/Button';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';
import { Reservation } from '~context/Reservations/types/types';

const ReservationList = (): ReactElement => {
    const { reservationsList } = useReservationsStateContext();
    const history = useHistory();

    const handleCreate = () => {
        history.push('/create');
    };

    if (!Object.keys(reservationsList).length) {
        return (
            <div>
                Sorry, no reservations yet.
                <div>
                    <Button type="button" text="Create Reservation" handleClick={handleCreate} />
                </div>
            </div>
        );
    }
    return (
        <div>
            {Object.keys(reservationsList).map((rezTime) => (
                <div key={rezTime}>{JSON.stringify(reservationsList[rezTime as keyof Reservation])}</div>
            ))}
        </div>
    );
};

export { ReservationList };
