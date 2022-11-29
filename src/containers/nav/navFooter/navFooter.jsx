import s from './navFooter.module.css'
import arrow from '../../../img/svg/small-arrow-down.svg'

function NavFooter() {
    return(
        <div className={s.wrap}>
            <div className={s.item}>
                Blog
            </div>
            <div className={s.item}>
                For developers
            </div>
            <div className={s.item}>
                For business
            </div>
            <div className={s.item}>
                More
                <img src={arrow} alt="a" className={s.ico} />
            </div>
        </div>

    )
}
export default NavFooter;