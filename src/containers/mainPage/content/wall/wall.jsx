import s from './wall.module.css'
import searchIco from '../../../../img/svg/search-ico.svg'
import HorizontalLine from '../../../../assets/horizontalLine/horizontalLine'
import IslandWrap from '../../../../assets/islandWrap/islandWrap';
import { useState, useEffect } from 'react';
import WallPost from './wallPost/wallPost';
import PostsArr from '../../../../assets/wallPostArray';


function Wall() {

    const [state, setState] = useState('All posts');
    let filt = [];

    const [availablePosts, setAvailablePosts] = useState(PostsArr);

    const handleClick = (buttonName) => {
        setState(buttonName);
    }

    const switchStates = (state) => {
        switch (state) {
            case 'All posts': return s.line62;
            case 'My posts': return s.line622;
            case 'Archived': return s.line87;
            default: break;
        }
    }

    function hidePost(wallState) {

        if (wallState === 'All posts') {
            filt = availablePosts.filter(post => !post.postArchieved)
        } else if (wallState === 'My posts') {
            filt = availablePosts.filter(post => post.userName === 'Santa Claus' && !post.postArchieved)
        } else if (wallState === 'Archived') {
            filt = availablePosts.filter(post => post.postArchieved)
            console.log('archived posts', filt)
        } else console.log('smth is wrong with posts')
    }

    hidePost(state);

    function deletePostF(postId) {
        setAvailablePosts(availablePosts.filter(value => value.id !== postId));
        console.log('deleting post', postId, availablePosts);
    }


    function renderPosts(n, index) {

        console.log('rendering posts', filt);
        return (
            <WallPost key={n.id} deletePost={deletedPostId => deletePostF(deletedPostId)} id={n.id}
                postArchieved={n.postArchieved} pfp={n.pfp} name={n.userName} likes={n.likes} date={n.date}
                text={n.text} picture={n.pic} views={n.views} reposts={n.reposts} comments={n.comments} />
        )
    }

    return (
        <div>
            <div className={s.mbm20}>
                <IslandWrap>
                    <div className={`${s.line} ${switchStates(state)}`} />
                    <div className={s.wrap}>
                        <div>
                            <button onClick={() => handleClick('All posts')} className={s.switchWall}>All posts</button>
                            <button onClick={() => handleClick('My posts')} className={s.switchWall}>My posts</button>
                            <button onClick={() => handleClick('Archived')} className={s.switchWall}>Archived posts</button>
                        </div>
                        <img className={s.ico} src={searchIco} alt="search" />
                    </div>
                    <div className={s.mtm15}>
                        <HorizontalLine />
                    </div>
                </IslandWrap>
            </div>
            {filt.map(renderPosts)}
        </div>
    )
}
export default Wall;


