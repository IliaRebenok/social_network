import s from './button.module.css'
import likeButton from '../../../../../img/svg/wall_post-likes.svg'
import commentButton from '../../../../../img/svg/wall_post-comments.svg'
import sharedButton from '../../../../../img/svg/wall_post-repost.svg'
import React from 'react';

function ButtonWall(props) {
    let imgSource = '';
    switch (props.type) {
        case 'like': imgSource = likeButton;
            break;
        case 'comment': imgSource = commentButton;
            break;
        case 'share': imgSource = sharedButton;
            break;
        default: break;
    }
    return (
        <button className={s.buttonWrap}>
            <div className={s.wrap}>
                <img className={s.icon} src={imgSource} alt='bttn' />
                <div className={s.counter}>{props.counter}</div>
            </div>
        </button>
    )
}
export default ButtonWall;
