import styled from 'styled-components';

export const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        cursor: pointer;
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
    }
`;
