import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    top: 20px;
    margin: 0;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 150px;
    min-width: 400px;
    border-radius: 5px;
    color: black;
    background-color: hsl(0,0%,90%);
    box-shadow: inset hsla(0,0%,0%, .25) 0 -1px 0px 7px,
    inset hsla(0,0%,100%,.7) 0  2px 1px 7px; 
    background-image: linear-gradient(180deg, hsl(0,0%,78%)  0%, 
    hsl(0,0%,90%) 47%, 
    hsl(0,0%,78%) 53%,
    hsl(0,0%,70%)100%);
`;

export const Pages = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
    height: 100%;
`;

export const P = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
`;