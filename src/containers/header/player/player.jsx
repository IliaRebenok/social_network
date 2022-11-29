import s from './player.module.css'
import bPr from '../../../img/svg/player-prev-ico.svg'
import bPl from '../../../img/svg/player-play-ico.svg'
import bN from '../../../img/svg/player-next-ico.svg'


function Player(props) {
    return(
        <div className={s.wrap}>
            <div className={s.button}>
                <img src={bPr} alt="pr" className={s.buttonIco} />
            </div>
            <div className={s.button}>
                <img src={bPl} alt="pl" className={s.buttonIco} />
            </div>
            <div className={s.button}>
                <img src={bN} alt="n" className={s.buttonIco} />
            </div>
            <div className={s.trackInfo}> {props.trackName}</div>
        </div>

    )
}
export default Player;