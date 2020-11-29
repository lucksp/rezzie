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
                    <List>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <List.Item key={item} id={item} handleItemClick={handleItemClick}>
                                {item}
                            </List.Item>
                        ))}
                    </List>
                }
            />
        </Card>
    );
};

export { StepOne };
