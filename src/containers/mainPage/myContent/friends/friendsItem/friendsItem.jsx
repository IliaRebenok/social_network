import s from './friendsItem.module.css'



function FriendsItem(props) {
    return (
        <div className={s.wrap}>
            <img className={s.photo} src={props.source} alt="avatar" />
            <div className={s.text}>{props.name}</div>
        </div>
    )
}
export default FriendsItem;