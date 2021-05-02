import styled from 'styled-components/macro';

export const FilterWrap = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    min-width: 150px;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    /* background-color: rgba(255, 255, 255, 0.5); */
    justify-content: flex-start;
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ChoiceButton = styled.button`
    text-decoration: none;
    width: 33px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2 ease;
    background-color: ${props => props.clicked ? "silver" : "white"} ;
    &:hover{
        transform: scale(1.1);
    }
`;