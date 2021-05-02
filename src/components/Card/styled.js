import styled from 'styled-components/macro';

export const MovieCardWrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin: 1rem;
    padding: 1.2rem;
    height: 230px;
    flex-grow: 1;
    flex-shrink: 0;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    flex-basis: 33.3333%;
	width: 200px;
    max-width: 200px;
    overflow: none;
    color: black;
    background-color: white;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;
export const MovieTitle = styled.h1`
    position: relative;
    font-size: 16px;
    margin: 0;
`;
export const LikesCount = styled.p`
    margin: 5px;
`;
export const MovieCategory = styled.p`
`;
export const MovieCardHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const ReactionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const Likes = styled.div`
    display: flex;
    width: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    transition: ease .2s;
`;
export const Dislikes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    width: 50px;
    transition: ease .2s;
`;

export const ThumbIcons = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LikeDislikeRatio = styled.progress`
    position: relative;
    height: 20px;
    margin: 1.2rem;
    width: 100px;
    background-color: #f56342;
    color: #90EE90;
    border-radius: 3px;
    ::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        color: lightgreen;
    }
    
`;

export const TrashIconSvg = styled.img`
    margin-top: auto;
    margin-left: auto;
    width: 28px;
    height: 28px;
    transition: 0.1s ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const ThumbIconSvg = styled.img`
    transition: 0.1s ease;
    transform: rotate(${props => props.down ? 180 : 0}deg);
    &:hover {
        cursor: pointer;
        transform: scale(1.1) rotate(${props => props.down ? 180 : 0}deg);
    }
`;

export const CountLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    width: 40%;
`;

export const CardBody = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;