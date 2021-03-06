import React from 'react';
import { LeftArrowWrapper, RightArrowWrapper } from './styled';

export const LeftArrow = ({onClick, disabled}) => {
    return (
        <LeftArrowWrapper disabled={disabled} onClick={disabled ? undefined : onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 8 16">
                <path style={{fill: disabled ? 'grey' : "black"}}  d="M.206 8.428l6.473 7.109c.275.301.721.301.996 0 .275-.303.275-.792 0-1.094l-5.975-6.561 5.975-6.562c.275-.302.275-.792 0-1.094-.275-.303-.721-.303-.996 0l-6.473 7.109c-.274.301-.274.792 0 1.093z"/>
            </svg>
        </LeftArrowWrapper>
    )
}
export const RightArrow = ({onClick, disabled}) => {
    return (
        <RightArrowWrapper disabled={disabled} onClick={disabled ? undefined : onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 8 16">
                <path style={{fill: disabled ? 'grey' : "black"}} d="M7.675 7.334l-6.473-7.108c-.275-.302-.721-.302-.996 0s-.275.792 0 1.094l5.976 6.561-5.976 6.562c-.275.302-.275.791 0 1.094s.721.303.996 0l6.473-7.108c.274-.303.274-.793 0-1.095z"/>
            </svg>
        </RightArrowWrapper>
    )
}