import React, { ReactElement } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '~components/Button';
import { Card } from '~components/Card';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';

const Reservation = (): ReactElement => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const { reservationsList } = useReservationsStateContext();

    const reservationDetails = reservationsList[decodeURIComponent(id)];

    const handleClick = () => {
        history.push('/');
    };

    return (
        <Card>
            <Card.Title title="Reservation Details" meta={<Button text="Close" handleClick={handleClick} />} />
            {reservationDetails && (
                <Card.Body
                    body={
                        <div>
                            <h5>{reservationDetails.name}</h5>
                            <p>
                                Party Size: <strong>{reservationDetails.size}</strong>
                            </p>
                            <p>
                                Time: <strong>{reservationDetails.time}</strong>
                            </p>
                            <p>
                                Visit Notes: <small>{reservationDetails.notes || 'none'}</small>
                            </p>
                        </div>
                    }
                />
            )}
            {!reservationDetails && <div>Sorry, reservation not found.</div>}
        </Card>
    );
};

export { Reservation };
