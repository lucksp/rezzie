import React, { ReactElement, ReactNode } from 'react';
import { ListItem } from './ListItem';
import { StyledList } from './StyledList.css';

interface ListProps {
    children: ReactNode;
}

const List = ({ children }: ListProps): ReactElement => {
    return <StyledList>{children}</StyledList>;
};

List.Item = ListItem;
export { List };
