import React, { MouseEvent, ReactElement } from 'react';
import { StyledList } from './StyledList.css';

interface ListProps {
    listItems: {
        text: string | number;
        meta?: string | number;
    }[];
    handleItemClick: (e: MouseEvent<HTMLLIElement>) => void;
}

const List = ({ listItems, handleItemClick }: ListProps): ReactElement => {
    return (
        <StyledList>
            {listItems.map((item) => {
                return (
                    <li key={item.text} data-item={item.text} onClick={handleItemClick}>
                        <h5>{item.text}</h5>
                        {item.meta && <small>{item.meta}</small>}
                    </li>
                );
            })}
        </StyledList>
    );
};

export { List };
