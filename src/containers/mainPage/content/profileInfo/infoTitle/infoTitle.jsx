import s from './infoTitle.module.css'

function InfoTitle(props) {
    return (
        <div className={s.wrap}>
            <span className={s.title}>{props.title}</span>
            <span className={s.line}></span>
        </div>

    )
}
export default InfoTitle;

