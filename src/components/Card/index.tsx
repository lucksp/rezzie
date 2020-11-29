import React, { ReactElement, ReactNode } from 'react';
import { Body } from './Card.Body';
import { Title } from './Card.Title';
import { StyledCard } from './StyledCard.css';

interface CardProps {
    children: ReactNode;
}
const Card = ({ children }: CardProps): ReactElement => {
    return <StyledCard>{children}</StyledCard>;
};

Card.Title = Title;
Card.Body = Body;
export { Card };
