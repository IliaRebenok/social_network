import s from './likeButton.module.css'
import likeButton from '../../../../../../img/svg/wall_post-likes.svg'
import likeButtonUsed from '../../../../../../img/svg/wall_post-likesDone.svg'
import { useState } from 'react'

function LikeButton(props) {
    const [liked, setLiked] = useState(() => {
        return false
    })

    let c = +props.counter;

    function handleClick() {
        setLiked(prevLiked => !prevLiked)
    }

    return (
        <button onClick={handleClick} className={s.buttonWrap}>
            <div className={s.wrap}>
                <img className={s.icon} src={liked ? likeButtonUsed : likeButton} alt='bttn' />
                <div className={s.counter}>
                    { liked ? c+1 : c}
                </div>
            </div>
        </button>
    )

}

export default LikeButton;

