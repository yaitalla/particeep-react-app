import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
export const P = styled.p``;

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ChoiceBtn = styled.button`
    text-decoration: none;
    width: 20px;
    display: flex;
    align-items: center;
`;

export const RadioWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
`;

export const RadioContainer = styled.div`
    display: flex;
    border-radius: 4px;
    flex-direction: row;
    width: 180px;
    background: #2b2e31;
`;

export const RadioInput = styled.input`
    display: block;
    width: 24px;
    height: 24px;
`;