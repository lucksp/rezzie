import React, { MouseEvent, ReactElement } from 'react';
import { StyledList, StyledListItem } from './StyledList.css';

interface ListProps {
    listItems: {
        text: string | number;
        meta?: string | number;
    }[];
    handleItemClick: (e: MouseEvent<HTMLLIElement | HTMLHeadingElement>) => void;
}

const List = ({ listItems, handleItemClick }: ListProps): ReactElement => {
    return (
        <StyledList>
            {listItems.map((item) => {
                const isDisabled = !!item.meta;
                return (
                    <StyledListItem
                        isDisabled={isDisabled}
                        key={item.text}
                        data-item={item.text}
                        onClick={!isDisabled ? handleItemClick : undefined}
                    >
                        <h5>{item.text}</h5>
                        {item.meta && <small>{item.meta}</small>}
                    </StyledListItem>
                );
            })}
        </StyledList>
    );
};

export { List };
