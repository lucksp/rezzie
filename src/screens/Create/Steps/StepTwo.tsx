import React, { MouseEvent, ReactElement } from 'react';
import { Card } from '~components/Card';
import { List } from '~components/List';

const interval = 15;
const until = Date.parse('11/28/2020 10:00 PM');
const from = Date.parse('11/28/2020 3:00 PM');
const max = (Math.abs(until - from) / (60 * 60 * 1000)) * (60 / interval);
const time = new Date(from);
const hoursArr: string[] = [];

for (let i = 0; i <= max; i++) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    hoursArr.push(`${hour}:${minute === 0 ? `0${minute}` : minute}`);
    time.setMinutes(time.getMinutes() + interval);
}

interface StepTwoProps {
    setTime: (time: Date) => void;
}
const StepTwo = ({ setTime }: StepTwoProps): ReactElement => {
    // const { reservations }: ReservationsState = useReservationsStateContext();
    const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
        const { item } = (e.target as HTMLLIElement).dataset;

        if (item) {
            setTime(new Date(item));
        }
    };

    const checkedTimes = hoursArr.map((int) => {
        const isBlocked = false;
        // const found =
        //     reservations &&
        //     Object.keys(reservations).forEach((rez) => {
        //         const reservation = reservations[rez as keyof Reservation];
        //     });
        return {
            text: int,
            meta: isBlocked ? 'Not Available' : undefined,
        };
    });

    return (
        <Card>
            <Card.Title title="Select a Time" />
            <Card.Body body={<List handleItemClick={handleItemClick} listItems={checkedTimes} />} />
        </Card>
    );
};

export { StepTwo };
