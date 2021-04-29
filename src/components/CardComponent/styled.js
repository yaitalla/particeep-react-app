import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin: 1rem;
    height: 400px;
    flex-grow: 1;
    flex-shrink: 0;
    border: 1px solid #eaeaea;
    border-raidus: 10px;
    flex-basis: 33.3333%;
	flex-basis: 300px;
    max-width: 300px;
    overflow: none;
`;
export const Title = styled.h1`
    position: relative;
    font-size: 20px;
    margin: 0;
    widht: 100%;
`;
export const P = styled.p`
    margin-left: 5px;
`;
export const CardHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const Bar = styled.div`
    height: 50px;
    justify-content: space-around;
    width: 100%;
    display: flex;
    flex-direction: row;
`;
export const Likes = styled.div`
    display: flex;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    background: lightgreen;
    transition: ease .2s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;
export const Dislikes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: #f56342;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const LikesInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    border: 1px solid;
`;

export const LikeRatio = styled.progress`
    -webkit-appearance: none;
    background-color: #f56342;
    color: lightgreen;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    ::before{
        content: '80%',
        color: lightgreen;
    }
`;