import React, { MouseEvent, ReactElement } from 'react';
import { StyledButton } from './StyledButton.css';

interface ButtonProps {
    type?: 'button' | 'submit';
    text: string;
    handleClick: (event: MouseEvent) => void;
}

const Button = ({ type = 'button', text, handleClick }: ButtonProps): ReactElement => {
    return (
        <StyledButton type={type} onClick={handleClick}>
            {text}
        </StyledButton>
    );
};

export { Button };
