import Friends from './friends/friends';
import Gifts from './gifts/gifts';
import s from './myContent.module.css'
import MyMedia from './myMedia/myMedia';
import Pfp from './pfp/pfp';
import ProfileLink from './profileLink/profileLink';

function MyContent() {
    return(
        <div className={s.contentWrap}>
            <Pfp />
            <ProfileLink />
            <Gifts number={10} />
            <Friends number={69} />
            <MyMedia />
        </div>
    )
}
export default MyContent;