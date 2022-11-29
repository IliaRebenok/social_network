import s from './service.module.css'
import ico from '../../../img/svg/header-menu-ico.svg'

function Service() {
    return(
        <div className={s.wrap}>
            <img src={ico} alt="serv" className={s.ico} />
        </div>

    )
}
export default Service;
