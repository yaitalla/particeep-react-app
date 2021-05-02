import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #ccc;
    padding: 0;

`;
export const Main = styled.main`
    display: flex;
    width: 80%;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
`;
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
    width: 100%;
`;
export const Card = styled.div`
    margin: 1rem;
    padding: 1.5rem;
    border: 1px solid #eaeaea;
    border-radius: 10px;
`;
export const H1 = styled.h1``;
export const H3 = styled.h3``;