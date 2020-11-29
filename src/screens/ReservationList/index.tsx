import React, { MouseEvent, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '~components/Button';
import { Card } from '~components/Card';
import { List } from '~components/List';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';
import { ReservationsState } from '~context/Reservations/types/types';
import { routes } from '~routes';

const ReservationList = (): ReactElement => {
    const { reservationsList } = useReservationsStateContext();
    const history = useHistory();

    const handleCreate = () => {
        history.push(routes.create);
    };

    const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
        const { item } = (e.target as HTMLLIElement).dataset;

        if (item) {
            history.push(routes.reservation(encodeURIComponent(item)));
        }
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
        <Card>
            <Card.Title title="Reservations" meta={<Button text="Create" handleClick={handleCreate} />} />
            <Card.Body
                body={
                    <List>
                        {Object.keys(reservationsList).map((rez) => {
                            const details = reservationsList[rez as keyof ReservationsState];
                            return (
                                <List.Item key={rez} id={rez} handleItemClick={handleItemClick}>
                                    <div>{details.size}</div>
                                    <div>
                                        <p>{details.name}</p>
                                        <small>{details.time}</small>
                                    </div>
                                </List.Item>
                            );
                        })}
                    </List>
                }
            />
        </Card>
    );
};

export { ReservationList };
