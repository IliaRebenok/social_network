import s from './nameActivity.module.css'


function NameActivity(props) {
    return (
        <div>
            <div className={s.firstStrokeWrap}>
                <div className={s.userName}>{props.userName}</div>
                <div className={s.activity}>{props.activity}</div>
            </div>
            <a href='#!' className={s.whatsUp}>{props.whatsUp}</a>
        </div>
    )
}
export default NameActivity;