import s from './userInfo.module.css'

function UserInfo(props) {
    return (
        <div className={s.wrap}>
            <div className={s.tableKey}>{`${props.tableKey}:`}</div>
            <a href={props.link} className={s.tableValue}>{props.tableValue}</a>
        </div>
    )
}
export default UserInfo;
