import s from './subsItem.module.css'

function SubsItem(props) {
    return (
        <div className={s.wrap}>
            <img className={s.image} src={props.source} alt="groupIco" />
            <div className={s.text}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.descr}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}
export default SubsItem;