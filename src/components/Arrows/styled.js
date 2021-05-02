import styled from 'styled-components/macro';

export const LeftArrowWrapper = styled.div`
    z-index: 10;
    display: flex;
    justify-content: center;
    left: 5%;
    top: 5%;
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    color: white;
    &:hover {
        background: ${props => props.disabled ? " rgba(255, 255, 255, 0.2)" : " rgba(255, 255, 255, 0.8)"};
        color: #16738D;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    }
`;
export const RightArrowWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    right: 5%;
    top: 5%;
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    &:hover {
        background: ${props => props.disabled ? " rgba(255, 255, 255, 0.2)" : " rgba(255, 255, 255, 0.8)"};
        color: #16738D;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    }
`;