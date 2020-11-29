import React, { MouseEvent, ReactElement } from 'react';
import { Card } from '~components/Card';
import { List } from '~components/List';
import { useReservationsStateContext } from '~context/Reservations/hooks/useReservations';

const interval = 15;
const until = Date.parse('11/28/2020 10:00 PM');
const from = Date.parse('11/28/2020 3:00 PM');
const max = (Math.abs(until - from) / (60 * 60 * 1000)) * (60 / interval);
const time = new Date(from);
const hoursArr: string[] = [];
for (let i = 0; i <= max; i++) {
    const hour = time.getHours() % 12 || 12;
    const minute = time.getMinutes();
    hoursArr.push(`${hour}:${minute === 0 ? `0${minute}` : minute}`);
    time.setMinutes(time.getMinutes() + interval);
}

interface StepTwoProps {
    setTime: (time: string) => void;
}
const StepTwo = ({ setTime }: StepTwoProps): ReactElement => {
    const { reservationsList } = useReservationsStateContext();

    const handleItemClick = (e: MouseEvent<HTMLLIElement | HTMLHeadingElement>) => {
        const { item } = (e.target as HTMLLIElement | HTMLHeadingElement).dataset;

        if (item) {
            setTime(item);
        }
    };
    const checkedTimes = hoursArr.map((timeSlot) => {
        const timeSlotSplit = timeSlot.split(':');
        const timeSlotHour = parseInt(timeSlotSplit[0]);
        const timeSlotMin = parseInt(timeSlotSplit[1]);

        const maxHour = timeSlotHour + 1;

        const isBlocked =
            reservationsList &&
            Object.keys(reservationsList).some((rez) => {
                const rezSplit = rez.split(':');
                const rezHour = parseInt(rezSplit[0]);
                const rezMin = parseInt(rezSplit[1]);
                const maxRezHour = rezHour + 1;

                if (
                    timeSlot === rez ||
                    `${maxHour}:${timeSlotMin}` === `${maxRezHour}:${rezMin}` ||
                    (maxRezHour >= maxHour && rezMin !== timeSlotMin)
                ) {
                    return true;
                }
            });
        return {
            text: timeSlot,
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
