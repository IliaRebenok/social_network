import s from './notifications.module.css'
import notIco from '../../../img/svg/notification-ico.svg'

function Notifications(props) {
    return(
        <div className={s.wrap}>
            <img src={notIco} alt="Ns" className={s.ico} />
            <div className={s.counter}> {props.number} </div>
        </div>

    )
}
export default Notifications;