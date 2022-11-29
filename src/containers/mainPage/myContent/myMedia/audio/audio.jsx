import s from './audio.module.css'
import albumCover from '../../../../../img/svg/audio-ico.svg'



function Audio(props) {
    return (
        <div className={s.wrap}>
            <img className={s.image} src={albumCover} alt='cover' />
            <div className={s.trackName} >
                <div className={s.artist}>{props.artist}</div>
                <div className={s.composition}>{props.composition}</div>
            </div>
        </div>
    )
}
export default Audio;