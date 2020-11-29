import React, { MouseEvent, ReactElement, ReactNode } from 'react';
import { StyledListItem } from './StyledList.css';

interface ListItemProps {
    children: ReactNode;
    handleItemClick?: (e: MouseEvent<HTMLLIElement>) => void;
    isDisabled?: boolean;
    id: string | number;
}

const ListItem = ({ children, handleItemClick, isDisabled, id }: ListItemProps): ReactElement => {
    return (
        <StyledListItem isDisabled={isDisabled} data-item={id} onClick={!isDisabled ? handleItemClick : undefined}>
            {children}
        </StyledListItem>
    );
};
export { ListItem };
