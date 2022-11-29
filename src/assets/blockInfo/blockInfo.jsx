import s from './blockInfo.module.css'


function BlockInfo(props) {
    if (props.updates) {
        return (
        <div className={s.wrap}>
            <div className={s.name}>{props.name}</div>
            <div className={s.counter}>{props.counter}</div>
            <div className={s.updates}>{props.updates}</div>
        </div>
    )
    } else {
        return (
            <div className={s.wrap}>
                <div className={s.name}>{props.name}</div>
                <div className={s.counter}>{props.counter}</div>
            </div>
        )
    }
}
export default BlockInfo;