import styled from 'styled-components';

export const Left = styled.div`
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    left: 5%;
    top: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    border: 1px solid #161B22;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: ${props => props.displaying ? "pointer" : "not-allowed"};
    }
`;
export const Right = styled.div`
    color: white;
    position: fixed;
    display: flex;
    justify-content: center;
    right: 5%;
    top: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    border: 1px solid #161B22;
    background: rgba(255, 255, 255, 0.2);
    &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: ${props => props.displaying ? "pointer" : "not-allowed"};
    }
`;