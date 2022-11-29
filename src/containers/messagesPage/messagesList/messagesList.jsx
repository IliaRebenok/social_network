import s from './messagesList.module.css'
import IslandWrap from '../../../assets/islandWrap/islandWrap'

function MessagesList() {
    return (
        <div className={s.mr10}>
        <IslandWrap>
            <div className={s.contentWrap}>
                messagesList
            </div>
        </IslandWrap>
        </div>
    )
}
export default MessagesList;