import React, { MouseEvent, ReactElement } from 'react';
import { StyledButton } from './StyledButton.css';

interface ButtonProps {
    type?: 'button' | 'submit';
    text: string;
    handleClick: (event: MouseEvent) => void;
    isDisabled: boolean;
}

const Button = ({ type = 'button', text, handleClick, isDisabled }: ButtonProps): ReactElement => {
    return (
        <StyledButton type={type} onClick={handleClick} disabled={isDisabled}>
            {text}
        </StyledButton>
    );
};

export { Button };
