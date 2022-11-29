import s from './topNav.module.css'
import arrow from '../../../img/svg/small-arrow-down.svg'

function TopNav() {
    return(
        <div className={s.wrap}>
            <img className={s.image} src="https://s1.1zoom.ru/big0/6/Christmas_Santa_Claus_Beard_Winter_hat_557839_1280x943.jpg" alt="pfpSmall" />
            <img className={s.arrow} src={arrow} alt="options" />
        </div>

    )
}
export default TopNav;