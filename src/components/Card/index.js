import React from 'react';
import { MovieCardWrap, MovieTitle, LikesCount, MovieCategory, TrashIconSvg,
    Likes, Dislikes, MovieCardHead, LikeDislikeRatio, ThumbIconSvg,
    ReactionsWrapper, ThumbIcons
} from './styled';
import { deleteMovie, updateLike, updateDislike, changeFilters } from '../../actions';


const Card = ({data, cb, isLastCard}) => {
    return (
        <MovieCardWrap>
            <MovieCardHead>
                <MovieTitle>{data.title}</MovieTitle>
                <MovieCategory>{data.category}</MovieCategory>
            </MovieCardHead>
            <ReactionsWrapper>
                <Likes onClick={() => updateLike(data.id, cb)}>
                    <ThumbIconSvg src={'/pouce.svg'} />
                    <LikesCount>{data.likes}</LikesCount>
                </Likes>
                <LikeDislikeRatio value={data.likes} max={data.likes+data.dislikes} ></LikeDislikeRatio>
                <Dislikes onClick={() => updateDislike(data.id, cb)}>
                    <ThumbIconSvg down={true} src={'/pouce.svg'} />
                    <LikesCount>{data.dislikes}</LikesCount>
                </Dislikes>    
                
            </ReactionsWrapper>
            <TrashIconSvg onClick={() => {
                if (isLastCard) changeFilters(cb, [])
                deleteMovie(data.id, cb)}} src={'./poubelle.svg'} />
        </MovieCardWrap>
    )
}

export default Card;