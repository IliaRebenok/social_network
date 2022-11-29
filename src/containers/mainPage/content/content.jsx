import s from './content.module.css'
import Photos from './photos/photos';
import ProfileInfo from './profileInfo/profileInfo';
import Wall from './wall/wall';
import WhatsNew from './whatsNew/whatsNew';

function Content() {
    return(
        <div className={s.contentWrap}>
            <ProfileInfo userName='Santa Claus' activity='online'/>
            <Photos />
            <WhatsNew />
            <Wall />
            
        </div>
    )
}
export default Content;