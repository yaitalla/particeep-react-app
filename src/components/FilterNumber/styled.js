import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    min-width: 150px;
    height: 100px;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 2mm ridge rgba(220, 220, 220, .6);
    justify-content: flex-start;
`;

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ChoiceBtn = styled.button`
    text-decoration: none;
    width: 33px;
    justify-content: center;
    text-align: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2 ease;
    &:hover{
        transform: scale(1.1);
    }
`;