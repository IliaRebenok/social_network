import s from './profileLink.module.css'
import icon from '../../../../img/link-ico.png'
import IslandWrap from '../../../../assets/islandWrap/islandWrap'

function ProfileLink() {
    return (
        <IslandWrap>
            <div className={s.link}>
                <img className={s.ico} src={icon} alt="link" />
                Profile link
            </div>
        </IslandWrap>
        
    )
}
export default ProfileLink;