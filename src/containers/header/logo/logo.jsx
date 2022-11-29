import s from './logo.module.css'
import logo from "../../../img/VK_Full_Logo.jpg"

function Logo() {
    return(
        <div className={s.logoWrap}>
            <img className={s.logo} src={logo} alt="logo" />
        </div>

    )
}
export default Logo;