import s from './wallPost.module.css'

import moreButton from '../../../../../img/svg/options_dots-ico.svg'
import ButtonWall from '../buttonWall/button';
import viewsIco from '../../../../../img/svg/wall_post-seen.svg'
import IslandWrap from '../../../../../assets/islandWrap/islandWrap';
import LikeButton from '../buttonWall/likeButton/likeButton';
import { useState, useEffect, useRef } from 'react'


function WallPost(props) {

    

    const [isPushed, setIsPushed] = useState(() => {
        return false;
    });

    function handleClick() {
        setIsPushed(!isPushed)
    }

    const [isDeleted, setIsDeleted] = useState(() => {
        return false;
    });

    function handleDelete() {
        setIsDeleted(!isDeleted)
    }

    

    let moreRef = useRef();
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!moreRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
                setIsPushed(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    });

    const hasPicture = (picName) => {
        return picName;
    }


    return (
            <IslandWrap >
                <div className={s.wrap}>
                    <div className={s.postInfoWrap}>
                        <img className={s.image} src={props.pfp} alt={props.name} />
                        <div className={s.nameBlock}>
                            <span className={s.name}> {props.name} </span>
                            <span> {hasPicture(props.picture) ? 'posted a picture:' : ''} </span>
                            <div className={s.nameBlock}> {props.date}</div>
                        </div>
                    </div>
                    <div className={s.moreWrap}>
                        <img ref={menuRef} onClick={handleClick} src={moreButton} alt="more" className={s.moreButton} />
                        <div ref={moreRef} className={isPushed ? s.more : s.none} >
                            <button div className={props.postArchieved ? s.none : s.deleteText}>
                                Archieve
                            </button>
                            <button onClick={() => { props.deletePost(props.id) }} className={s.deleteText}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>


                <div>
                    <div className={s.postText}>
                        {props.text}
                    </div>
                    <div className={hasPicture(props.picture) ? s.show : s.none}>
                        <img src={props.picture} alt="PostPicture" className={s.wallPostImg} />
                    </div>
                </div>
                <div className={s.buttonsWrap}>
                    <div className={s.buttonsBlock}>
                        <LikeButton counter={props.likes} />
                        <ButtonWall type='comment' counter={props.comments} />
                        <ButtonWall type='share' counter={props.shares} />
                    </div>
                    <div className={s.viewCounter}>
                        <img className={s.viewIco} src={viewsIco} alt="views" />
                        <span>{props.views}</span>
                    </div>
                </div>
            </IslandWrap>



    )
}

export default WallPost;


