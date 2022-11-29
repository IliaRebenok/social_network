import s from './video.module.css'

function Video(props) {
    return (
        <div className={s.wrap}>
            <iframe title='firstVideo' src={props.link} frameborder="0" width="200" height="110" allowFullScreen></iframe>
        </div>
    )
}
export default Video;