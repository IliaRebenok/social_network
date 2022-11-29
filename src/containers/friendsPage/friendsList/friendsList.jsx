import s from './friendsList.module.css'
import IslandWrap from '../../../assets/islandWrap/islandWrap'

function FriendsList() {
    return (
        <div className={s.mr10}>
        <IslandWrap>
            <div className={s.contentWrap}>
                Friends List
            </div>
        </IslandWrap>
        </div>
    )
}
export default FriendsList;