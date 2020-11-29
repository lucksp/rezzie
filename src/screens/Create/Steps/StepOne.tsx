import React, { MouseEvent, ReactElement } from 'react';
import { Card } from '~components/Card';
import { List } from '~components/List';

interface StepOneProps {
    setSize: (size: number) => void;
}
const StepOne = ({ setSize }: StepOneProps): ReactElement => {
    const handleItemClick = (e: MouseEvent<HTMLLIElement>) => {
        const { item } = (e.target as HTMLLIElement).dataset;

        if (item) {
            setSize(parseInt(item));
        }
    };

    return (
        <Card>
            <Card.Title title="Select a Party Size" />
            <Card.Body
                body={
                    <List
                        handleItemClick={handleItemClick}
                        listItems={[{ text: 1 }, { text: 2 }, { text: 3 }, { text: 4 }, { text: 5 }]}
                    />
                }
            />
        </Card>
    );
};

export { StepOne };
