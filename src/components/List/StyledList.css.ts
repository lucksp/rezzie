import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

interface ListProps {
    isDisabled?: boolean;
}
export const StyledListItem = styled.li<ListProps>`
    cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) => (props.isDisabled ? 'gray' : 'initial')};
    padding: 8px 16px;
    border: 1px solid black;
    &:first-of-type {
        border-bottom: 0;
    }
    &:not(:first-of-type) {
        border-bottom: 0;
    }
    &:last-of-type {
        border-bottom: 1px solid black;
    }
`;
