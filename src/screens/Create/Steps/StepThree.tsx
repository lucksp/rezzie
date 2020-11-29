import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Button } from '~components/Button';
import { Card } from '~components/Card';

interface StepThreeProps {
    handleSave: ({ name, notes }: { name: string; notes: string }) => void;
}

const StepThree = ({ handleSave }: StepThreeProps): ReactElement => {
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');

    const handleClick = () => {
        handleSave({ name, notes });
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNotesChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNotes(e.target.value);
    };

    return (
        <Card>
            <Card.Title title="Guest Details" meta={<Button text="Save" handleClick={handleClick} />} />
            <Card.Body
                body={
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={handleNameChange} value={name} />
                        </div>
                        <div>
                            <label htmlFor="notes">Visit Notes</label>
                            <input type="text" id="notes" onChange={handleNotesChange} value={notes} />
                        </div>
                    </div>
                }
            />
        </Card>
    );
};

export { StepThree };
