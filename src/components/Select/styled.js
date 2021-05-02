import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    min-width: 150px;
    height: 100px;
    padding: 0;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    overflow: scroll;
    border: 2mm ridge rgba(220, 220, 220, .6);
`;

export const FiltersGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
    width: 100%;
`;

export const Filter = styled.button`
    text-decoration: none;
    border: 1mm ridge rgba(220, 220, 220, .6);
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2 ease;
    background-color: ${props => props.selected ? "silver" : "white"};
    &:hover{
        transform: scale(1.1);
    }
`;