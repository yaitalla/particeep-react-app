import React from 'react';
import { Wrap, Title, P, Bar, Category, TrashSvg,
    Likes, Dislikes, CardHead, LikeRatio, ThumbSvg
} from './styled';
import { deleteMovie, updateLike, updateDislike } from '../../actions';


const Card = ({data, cb}) => {
    return (
        <Wrap>
            <CardHead>
                <Title>{data.title}</Title>
                <Category>{data.category}</Category>
            </CardHead>
            <LikeRatio value={data.likes} max={data.likes+data.dislikes} ></LikeRatio>
            <Bar>
                <Likes onClick={() => updateLike(data.id, cb)}>
                    <ThumbSvg src={'/pouce.svg'} />
                    <P>{data.likes}</P>
                </Likes>
                <Dislikes onClick={() => updateDislike(data.id, cb)}>
                    <ThumbSvg down={true} src={'/pouce.svg'} />
                    <P>{data.dislikes}</P>
                </Dislikes>
            </Bar>
            <TrashSvg onClick={() => deleteMovie(data.id, cb)} src={'./poubelle.svg'} />
        </Wrap>
    )
}

export default Card;