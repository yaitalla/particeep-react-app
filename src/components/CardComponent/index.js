import React from 'react';
import { Wrap, Title, P, Bar,
    Likes, Dislikes, CardHead, LikesInfos, LikeRatio
} from './styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsDown, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { /*deleteMovie,*/ updateLike, updateDislike } from '../../actions';

const Card = ({data, cb}) => {
    return (
        <Wrap>
            <CardHead>
                <Title>{data.title}</Title>
                <p>{data.category}</p>
            </CardHead>
            <LikesInfos>
            </LikesInfos>
            <LikeRatio value={data.likes} max={data.likes+data.dislikes} ></LikeRatio>
            <Bar>
                <Likes onClick={() => updateLike(data.id, cb)}>
                    {/* <FontAwesomeIcon size={"2x"} id={'test'} icon={faThumbsUp} /> */}
                    <P>{data.likes}</P>
                </Likes>
                <Dislikes onClick={() => updateDislike(data.id, cb)}>
                    {/* <FontAwesomeIcon size={"2x"} icon={faThumbsDown} /> */}
                    <P>{data.dislikes}</P>
                </Dislikes>
            </Bar>
            {/* <FontAwesomeIcon onClick={() => deleteMovie(data.id, cb)} size={"2x"} icon={faTrash} /> */}
        </Wrap>
    )
}

export default Card;